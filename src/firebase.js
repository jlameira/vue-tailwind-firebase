import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'login-4fb38.firebaseapp.com',
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: 'login-4fb38',
  storageBucket: 'login-4fb38.appspot.com',
  messagingSenderId: '689428073867',
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: 'G-JK2WN1FJK7',
};

firebase.initializeApp(config);
const firestore = firebase.firestore();

// export const db = firebase.database();
export const dbUserRef = firestore.collection('user');
export const firebaseAuth = firebase.auth();
