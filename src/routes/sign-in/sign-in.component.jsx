import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { CreateUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup();
    const {user} = response;
    const docRef = await CreateUserDocumentFromAuth(user);
  }
  return(
    <div>
      <h1>This is sign in</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn