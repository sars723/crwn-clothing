import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyAaXd2QgZtLFh_3qpz-Ssgcr10Wf8UVpbQ',
  authDomain: 'crwn-clothing-db-c44c3.firebaseapp.com',
  projectId: 'crwn-clothing-db-c44c3',
  storageBucket: 'crwn-clothing-db-c44c3.appspot.com',
  messagingSenderId: '927043207655',
  appId: '1:927043207655:web:93422521d174e79d557d42'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log(error.message , 'error creating the user');
    }
  }
  return userDocRef;
};
