import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-up-form.styles.scss'
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};
const SignupForm = () => {
  const [formFields, setFromfields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields=()=>{
    setFromfields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromfields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log("handle");
    if (password !== confirmPassword) {
      alert("pasword dont match");
      return;}
try {
    const {user }= await createAuthUserWithEmailAndPassword(email, password);  console.log(user);
    const userRef= await createUserDocumentFromAuth(user,{displayName});console.log("userref",userRef);
    resetFormFields()
} catch (error) {
if(error.code=== 'auth/email-already-in-use'){
  alert("cant create user, email aleady in use");
}
  console.log("user creation encountere an error",error);
}
  
  
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
       {/*  <label>Display Name</label> */}
        <FormInput
        label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
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
    {/*     <label>Confirm Password</label> */}
        <FormInput
        label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button buttonType='google'>Sign Up</Button>
      </form>
    </div>
  );
};
export default SignupForm;
