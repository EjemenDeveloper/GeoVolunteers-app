import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

enum Role {
  ADMIN = "ADMIN",
  VOLUNTEER = "VOLUNTEER",
  USER = "USER",
}

export const volunteerCreated = functions.firestore
  .document("volunteers/{volunteerId}")
  .onCreate(async (_snapshot, context) => {
    const volunteerId = context.params.volunteerId;
    return admin
      .auth()
      .setCustomUserClaims(volunteerId, { role: Role.VOLUNTEER });
  });
  export const userCreated = functions.firestore
  .document("users/{userId}")
  .onCreate(async (_snapshot, context) => {
    const userId = context.params.userId;
    return admin.auth().setCustomUserClaims(userId, { role: Role.USER });
  });

export const adminCreated = functions.firestore
  .document("admins/{adminId}")
  .onCreate(async (_snapshot, context) => {
    const adminId = context.params.adminId;
    return admin.auth().setCustomUserClaims(adminId, { role: Role.ADMIN });
  });
