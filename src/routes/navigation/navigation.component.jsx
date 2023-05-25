import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';
import './navigation.styles.scss';
//import Logo from '../../assets/crown.svg';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {/* <div> <img src={Logo} alt="" /></div> */}
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="auth">
            Sign In
          </Link>
         
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
