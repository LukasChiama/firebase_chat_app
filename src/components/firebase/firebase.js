import app from "firebase/app";

var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId
};

class Firebase { 
  constructor() {
    app.initializeApp(config)
  }
}
 
// const database = firebase.database();
// const auth = firebase.auth();


export default Firebase;