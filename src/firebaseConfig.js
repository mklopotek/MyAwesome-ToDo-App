import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDh6_J2-Yv4niKY_YPQnXk5nOJ9W-SGnEo",
    authDomain: "my-awesome-to-do-app.firebaseapp.com",
    databaseURL: "https://my-awesome-to-do-app.firebaseio.com",
    projectId: "my-awesome-to-do-app",
    storageBucket: "",
    messagingSenderId: "399151089000"
};

firebase.initializeApp(config);

export const database = firebase.database()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()