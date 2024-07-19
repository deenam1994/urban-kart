import { useState } from "react";
import { CreateUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserFromEmailAndPwd } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'
import Button from "../button/button.component";

const SignInForm = () => {

  const defaultFormFields = {
    email: '',
    password: ''
  }

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {user} = await signInAuthUserFromEmailAndPwd(email, password);
      resetFormFields();
    } catch (error) {
      switch(error.code){
        case 'auth/invalid-credential':
          alert('Incorrect password!');
          break;
        case 'auth/user-not-found':
          alert('Not user found with the given email Id');
          break;
        default:
          console.error(error);
          break;
      }
    }
  }

  const signInWithGoogle = async() => {
    await signInWithGooglePopup();
  }

  return(
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput label="Email" type="email" name='email' value={email} onChange={handleChange} />

        <FormInput label="Password" type="password" name='password' value={password} onChange={handleChange} />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType={'google'} onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;