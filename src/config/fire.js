import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyB0-mScRD8vcDtxJHqd-GY0RFxD4gOns4c",
    authDomain: "yike-66e9a.firebaseapp.com",
    projectId: "yike-66e9a",
    storageBucket: "yike-66e9a.appspot.com",
    messagingSenderId: "802554287946",
    appId: "1:802554287946:web:52e81c7f0e92ec0d6e93b3",
    measurementId: "G-HKNP5J002N"
  };

  const fire =firebase.initializeApp(firebaseConfig);
  export default fire;