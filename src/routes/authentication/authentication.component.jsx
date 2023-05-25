import { useEffect } from 'react';

import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';
import SignupForm from '../../components/sign-up-form/sign-up-form.component';
import SigninForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication,styles.scss';
const Authentication = () => {
  const result = async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
    if (response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
      console.log(userDocRef);
    }
  };
  useEffect(() => {
    result();
  }, []);

  return (
    <div className="authentication-container">
      
      <SigninForm />
      <SignupForm />
    </div>
  );
};
export default Authentication;
