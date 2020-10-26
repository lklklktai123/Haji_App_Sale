
import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCj96LDp49FNar3GW9v9DeoOgU6O9BRAe8",
    authDomain: "hajiappsale2020.firebaseapp.com",
    databaseURL: "https://hajiappsale2020.firebaseio.com",
    projectId: "hajiappsale2020",
    storageBucket: "hajiappsale2020.appspot.com",
    messagingSenderId: "908461420140",
    appId: "1:908461420140:web:f1ae7871c22c148547b249",
    measurementId: "G-HYE50QG430"
  };
  // Initialize Firebase
  
  export const firebaseApp = firebase.initializeApp(firebaseConfig);