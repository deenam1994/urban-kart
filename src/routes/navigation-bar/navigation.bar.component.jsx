import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/images/crown.svg';
import './navigation.bar.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const NavigationBar = () => {
  const {currentUser} = useContext(UserContext);

  const signOutHandler = () => {
    signOutUser();
  };

  console.log('Nav: ', currentUser);
  return(
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <CrownLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler} >SIGN OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )
          }
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default NavigationBar