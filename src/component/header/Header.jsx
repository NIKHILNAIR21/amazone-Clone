import React, { useEffect } from "react";
import { SearchIcon, ShoppingBasketIcon } from "../../icons/icons";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
// firebase
import { auth } from "../../firebase/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "../../context/StateProvider";
import "./header.css";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(basket);

  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="" />
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user?.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
