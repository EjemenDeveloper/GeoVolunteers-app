import * as admin from "firebase-admin";
import { geohashQueryBounds } from "geofire-common";
import { radiusInM } from "../incident";

export const queryVolunteerHashes = (
  c1: number,
  c2: number,
  category: string
) => {
  const bounds = geohashQueryBounds([c1, c2], radiusInM);
  const promises = [];
  for (const b of bounds) {
    const q = admin
      .firestore()
      .collection("volunteers")
      .where("active", "==", true) // Must be active
      .where("category", "==", category) // Must be under the specified the incident category
      .orderBy("geoHash")
      .startAt(b[0])
      .endAt(b[1]);

    promises.push(q.get());
  }

  // Collect all the query results together into a single list
  return Promise.all(promises)
    .then((snapshots) => {
      const docs: any[] = [];

      for (const snap of snapshots) {
        for (const doc of snap.docs) {
          docs.push(doc.data());
        }
      }
      return docs;
    })
};
