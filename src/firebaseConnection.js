import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD-d4JHIthIrTw48QSi15Vk3lZ7zirVA8k",
    authDomain: "chamados-15a88.firebaseapp.com",
    projectId: "chamados-15a88",
    storageBucket: "chamados-15a88.appspot.com",
    messagingSenderId: "835150127559",
    appId: "1:835150127559:web:b99b98a5024d37068239e2",
    measurementId: "G-21RREEEVVH"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {db, auth}