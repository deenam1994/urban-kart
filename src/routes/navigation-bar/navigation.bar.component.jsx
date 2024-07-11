import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/images/crown.svg';
import './navigation.bar.styles.scss';

const NavigationBar = () => {
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
          <Link className='nav-link' to='/auth'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default NavigationBar