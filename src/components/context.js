import app from "firebase/app";

var config = {
  apiKey: process.env.local.REACT_APP_API_KEY,
  authDomain: process.env.local.REACT_APP_authDomain,
  databaseURL: process.env.local.REACT_APP_databaseURL,
  projectId: process.env.local.REACT_APP_projectId,
  storageBucket: process.env.local.REACT_APP_storageBucket,
  messagingSenderId: process.env.local.REACT_APP_messagingSenderId
};

class Firebase {
  constructor() {
    app.initializeApp(config)
  }
}

export default Firebase;