import app from "firebase/app";
import "firebase/auth";
import "firebase/database"

const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId
};

class Firebase { 
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  createUser = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  signInUser = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  passwordReset = email => this.auth.sendPasswordResetEmail(email)

  passwordUpdate = password => this.auth.currentUser.updatePassword(password)

  user = (userId) => this.db.ref(`/users${userId}`);

  users = () => this.db.ref('users')

  message = (userId) => this.db.ref(`/messages${userId}`);

  messages = () => this.db.ref('messages')
}


export default Firebase;