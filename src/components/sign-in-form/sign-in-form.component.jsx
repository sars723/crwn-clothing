import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: ''
};
const SigninForm = () => {
  const [formFields, setFromfields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFromfields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromfields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handle');

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      console.log(user);
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert("cant sign in, user don't exist");
      }
      console.log('user creation encountere an error', error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>I already habe an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/*  <label>Email</label> */}
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        {/*  <label>Display Password</label> */}
        <FormInput
          label="Display Passord"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>
            Sign in with Google Popup
          </Button>
        </div>
        {/*  <button onClick={signInWithGoogleRedirect}>
          Sign in with Google Redirect
        </button> */}
      </form>
    </div>
  );
};
export default SigninForm;
