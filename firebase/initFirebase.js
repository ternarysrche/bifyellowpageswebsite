import firebase from "firebase/compat/app";
import { getApps, initializeApp, getApp } from "firebase/app"

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, // we don't have this in the env, do we need this? what's it for
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export default function initFirebase() {
    let firebaseApp; 
    if (!getApps().length) {     
        firebaseApp = initializeApp(clientCredentials);
        // Check that `window` is in scope for the analytics module!
        
        if (typeof window !== "undefined") {
            // Enable analytics. https://firebase.google.com/docs/analytics/get-started
            if ("measurementId" in clientCredentials) {
                firebase.analytics();
                firebase.performance();
            }
        }
        console.log("Firebase was successfully init.");
    } 
    else { 
        firebaseApp = getApp(); 
    }
    // return firebaseApp;
}