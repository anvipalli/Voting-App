import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLLmSWxXbCgVwMwGMNjYGEi_UVr7ZCbAA",
    authDomain: "voting-a.firebaseapp.com",
    projectId: "voting-a",
    storageBucket: "voting-a.appspot.com",
    messagingSenderId: "179840862855",
    appId: "1:179840862855:web:e75b611f60964273bdc622"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase.database();