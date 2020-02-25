import React from 'react';
import UserModel from '../UserModel';
import 'styles.css';

const ContactsBar = ()  => {
  return (
    <div className="ContactsBar">
      <div className="user">
        <UserModel />
      </div>
      <div className="searchForContacts">
        <input type="text"/>
      </div>
      <div className="contacts">
        <UserModel />
        <UserModel />
        <UserModel />
      </div>
    </div>
  );
}

export default ContactsBar;
