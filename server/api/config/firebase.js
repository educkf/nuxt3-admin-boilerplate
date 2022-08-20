import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// set firebase application credentials
// https://cloud.google.com/docs/authentication/getting-started
// example (windows):
// $env:GOOGLE_APPLICATION_CREDENTIALS="..\nuxt3-boilerplate-credentials.json"

initializeApp({
    credential: applicationDefault(),
    projectId: process.env.FIREBASE_ID
});

export const db = getFirestore();
