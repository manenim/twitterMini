import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

export var firebaseConfig = {
    apiKey: "AIzaSyBMzojwILzBAao7iBwKSLVy3i-TVjkIv34",
    authDomain: "twitter-clone-f4db0.firebaseapp.com",
    projectId: "twitter-clone-f4db0",
    storageBucket: "twitter-clone-f4db0.appspot.com",
    messagingSenderId: "182518581120",
    appId: "1:182518581120:web:9225a41a90c00965522365"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore()
  const projectStorage = firebase.storage();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore, timeStamp }

export default firebase