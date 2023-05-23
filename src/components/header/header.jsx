import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "././../../assets/4.3 crown.svg.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? <div className="option" onClick={() => auth.signOut()}>SignOut</div>
        : <Link className="option" to="/signin">Signin</Link>
        }
      </div>
    </div>
  );
export default Header;
