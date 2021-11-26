import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDDdiNH3uW89FQU6oUBSyH16GBEAFkSNmw",
    authDomain: "programaciontpfinal-1efaa.firebaseapp.com",
    projectId: "programaciontpfinal-1efaa",
    storageBucket: "programaciontpfinal-1efaa.appspot.com",
    messagingSenderId: "122723398792",
    appId: "1:122723398792:web:f8a641a853d37084ea5b3d",
    measurementId: "G-MTGB01JLQH"    
};
const  app= initializeApp(firebaseConfig)
const db = getFirestore ()
const storage = getStorage(app)
const auth = getAuth()
export{db,storage,auth};