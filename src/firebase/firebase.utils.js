import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD2eegCgun6WLvHcvldMZ8kcXOCtY_MvDs",
    authDomain: "react-ecommerce-store-17949.firebaseapp.com",
    projectId: "react-ecommerce-store-17949", 
    storageBucket: "react-ecommerce-store-17949.appspot.com",
    messagingSenderId: "758491002050", 
    appId: "1:758491002050:web:c2e6672c1b1883e11d775b"
};
  
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
