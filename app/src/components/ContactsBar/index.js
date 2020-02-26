import React, { useState, useEffec, useEffect } from 'react';
import UserModel from '../UserModel';

import api from '../../services/api.json';

import './styles.css';

const ContactsBar = ()  => {
  const [userData, setUserData] = useState();
  const [contactsListData, setContactsListData] = useState([]);
  useEffect ( () => {
    setUserData(api.user);
    setContactsListData(api.contacts);
  }, [] );
  return (
    <div className="ContactsBar">
      <div className="user">
        <UserModel name="My name is"/>
      </div>
      <div className="searchForContacts">
        <input type="text"/>
      </div>
      <div className="contacts">
        {
          contactsListData.map(e => (
            <UserModel 
              name={e.user_name}
              company={e.company}
              profile_photo_url={e.profile_photo_url}
            />
          ))
        }
      </div>
    </div>
  );
}

export default ContactsBar;
