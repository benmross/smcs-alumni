import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCJR6Xx5Vib3wqE5ZLdF950uoqJHo2TKu4",
  authDomain: "smcs-alumni-95b4d.firebaseapp.com",
  projectId: "smcs-alumni-95b4d",
  storageBucket: "smcs-alumni-95b4d.appspot.com",
  messagingSenderId: "948220158629",
  appId: "1:948220158629:web:459fc6a42744957314634c",
  measurementId: "G-NH3GSX2N1D"
};

let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export var database = getFirestore(app)
export var storage = getStorage(app)
export var auth = getAuth(app)