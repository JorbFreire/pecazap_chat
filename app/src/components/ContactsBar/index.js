import React from 'react';
import UserModel from '../UserModel';
import './styles.css';

const ContactsBar = ()  => {
  return (
    <div className="ContactsBar">
      <div className="user">
        <UserModel />
      </div>
      <div className="searchForContacts">
        <input type="text"/>
      </div>
      <nav className="contacts">
        <UserModel />
        <UserModel />
        <UserModel />
      </nav>
    </div>
  );
}

export default ContactsBar;
