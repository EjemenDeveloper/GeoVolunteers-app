import * as functions from "firebase-functions";
import { distanceBetweenCoords } from "../distance";
import { queryVolunteerHashes } from "../incident";

export const radiusInM = 2 * 1000; // 2 KM Radius;
interface ApiError {
  code: number;
  error: string;
}

function isApiError(x: any): x is ApiError {
  return typeof x.code === "number";
}
export const incidentCreated = functions.firestore
  .document("incidents/{incidentId}")
  .onCreate(async (snap, context) => {
    try {
      const matchingDocs: any[] = [];
      const incident = snap.data();
      const incidentId = context.params.incidentId;
      const { latitude, longitude } = incident.location;
      // PROCEDURE: Search volunteers collection and get list of pushToken

      let docs: any[] = await queryVolunteerHashes(
        latitude,
        longitude,
        incident.category
      );

       //sort volunteers by those who have accepted the most number incidents
      docs.sort((a, b)=> b.totalIncidents - a.totalIncidents)
      
     functions.logger.info("DOCS>>", docs);
      const pushTokens: any[] = await Promise.all(
        docs.map(async (doc) => {
          const distance = await distanceBetweenCoords(
            [latitude, longitude],
            [doc.location.latitude, doc.location.longitude]
          );
          functions.logger.info("DISTANCE (M)", distance);
          functions.logger.info("RADIUS (M)", radiusInM);
          //verify distance and get at most 3 volunteers
          if (distance <= radiusInM && matchingDocs.length < 3) { 
            functions.logger.info("MATCH", doc);
            return doc.pushToken as string;
          }
        })
      );

      functions.logger.info("TOKENS", pushTokens);

      const promises: Promise<void>[] = [];

      if (pushTokens.length > 0) {
        pushTokens.forEach((pushToken) => {
          promises.push(
            sendPushNotification({
              pushToken,
              message: `🛑 ${incident.message}`,
              data: {
                incidentId,
              },
            })
      );
        });
      }

      return Promise.all(promises).then(() => {
        functions.logger.info("NOTIFICATIONS sent!!!!");
      });
    } catch (error) {
      if (isApiError(error)) {
        console.log(error);
      }
    }
  }); 
