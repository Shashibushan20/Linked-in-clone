// Header.js
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUsers, faBriefcase, faComments, faBell } from '@fortawesome/free-solid-svg-icons';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from "./features/userSlice"

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="head-container">
      <div className="head-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
          alt=""
        />
      
      <div className="head-search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search..." id="search-input" />
      </div></div>
      <div className='head-right'>
        <HeaderOption Icon={faHome} title="Home" />
        <HeaderOption Icon={faUsers} title="My Network" />
        <HeaderOption Icon={faBriefcase} title="Jobs" />
        <HeaderOption Icon={faComments} title="Messaging" />
        <HeaderOption Icon={faBell} title="Notification"  />
        <HeaderOption title="Me" image={user ? user.photoUrl : ""} />
        <button onClick={logOutOfApp} >logout</button>
      </div>
    </div>
  );
};

export default Header;
