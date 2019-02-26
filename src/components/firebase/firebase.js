import app from "firebase/app";
import "firebase/auth";


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId
};

console.log(config, app)

class Firebase { 
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  createUser = (email, password) => this.auth.createUser(email, password);

  signInUser = (email, password) => this.auth.signInUser(email, password);

  signUpUser = (email, password) => this.auth.signUpUser(email, password);

  signOut = () => this.auth.signOut();

  passwordReset = email => this.auth.passwordReset(email);

  passwordUpdate = password => this.auth.user.passworrdUpdate(password);

}


export default Firebase;