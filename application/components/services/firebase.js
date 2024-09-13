import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBJnuUw7LTOX87OFU_UWP3QBwXQmjVR_98",
    authDomain: "guide-wire-7c68a.firebaseapp.com",
    projectId: "guide-wire-7c68a",
    storageBucket: "guide-wire-7c68a.appspot.com",
    messagingSenderId: "701367628458",
    appId: "1:701367628458:web:ea83c878663f154a8716d3",
    measurementId: "G-PQFWK40HG9"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app();
}
export const dbh = firebase.firestore();

export async function emailLogin(email, password) {
    return await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
}

// export async function addUser(state) {
//     let user = firebase.auth().currentUser;
//     dbh.collection("users").doc(user.uid).set({
//         name: state.name,
//         last_name: state.lastName,
//         hospital_name: state.hospitalName,
//         email: state.email,
//     }).then(() => {
//         return "Document successfully written!";
//     }).catch((error) => {
//         console.error("Error writing document: ", error);
//     });
// }



export async function register(email, password) {
    return await firebase.auth().createUserWithEmailAndPassword(email, password);
}

export async function logout() {
    console.log('log out....!');
    return await firebase.auth().signOut();
}

export async function isLogged() {
    return firebase.auth().currentUser;
}

export default firebase;
