import firebase from "firebase"

var config = {
    apiKey: "AIzaSyC9ggugzO69hq8i8xP5AV1XMnImNImtLpk",
    authDomain: "logicwebsite-336d6.firebaseapp.com",
    databaseURL: "https://logicwebsite-336d6.firebaseio.com",
    projectId: "logicwebsite-336d6",
    storageBucket: "logicwebsite-336d6.appspot.com",
    messagingSenderId: "3105549246"
  };
  firebase.initializeApp(config);

  export default firebase