import firebase from 'firebase';
import 'firebase/firestore'

if (!firebase.apps.length){

    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_APP_KEY,
        authDomain:process.env.NEXT_PUBLIC_FIREBASE_API_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_FIREBASE_API_PROJECT_ID
    })

}


export default firebase