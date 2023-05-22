//import { useEffect } from 'react';
//import { getRedirectResult } from 'firebase/auth';
import {
  
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  //auth,
  //signInWithGoogleRedirect,
  
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  /* const result = async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
   if(response){
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
   }
   
  };  
  useEffect(()=>{
    result();
  }, []); */


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};
export default SignIn;
