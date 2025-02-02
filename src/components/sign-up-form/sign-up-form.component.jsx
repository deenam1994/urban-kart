import { useState } from "react";
import { createAuthUserFromEmailAndPwd, CreateUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss'
import Button from "../button/button.component";

const SignUpForm = () => {

  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword){
      alert ('Passwords do not match!');
      return;
    }

    try {
      const { user } =  await createAuthUserFromEmailAndPwd(email, password);
      await CreateUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use'){
        alert('Email already in use. Cannot create user.');
      }
      console.error('Error while creating user: ', error.message);
    }
  }

  return(
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" type="text" name='displayName' value={displayName} onChange={handleChange}/>

        <FormInput label="Email" type="email" name='email' value={email} onChange={handleChange} />

        <FormInput label="Password" type="password" name='password' value={password} onChange={handleChange} />

        <FormInput label="Confirm Password" type="password" name='confirmPassword' value={confirmPassword} onChange={handleChange} />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;