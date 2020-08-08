import firebase from "./firebase";

const db = firebase.firestore();

// Create User Function
export const createUser = (uid, data) => {
  return db
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
};
