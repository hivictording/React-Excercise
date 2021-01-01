// import firebase from 'firebase/app'
// import 'firebase/firestore'
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBzYv_2Trl63nlTTTOPqoKzaKzakWRhp-E",
    authDomain: "fir-test-1-988ef.firebaseapp.com",
    projectId: "fir-test-1-988ef",
    storageBucket: "fir-test-1-988ef.appspot.com",
    messagingSenderId: "427194367154",
    appId: "1:427194367154:web:83908b76cf759064f35dab"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;