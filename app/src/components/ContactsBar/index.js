import React, { useState, useEffect } from 'react';
import UserModel from '../UserModel';

import api from '../../services/api.json';

import './styles.css';

const ContactsBar = ()  => {
  const [userData, setUserData] = useState({});
  const [contactsListData, setContactsListData] = useState([]);

  useEffect ( () => {
    setUserData(api.user);
    setContactsListData(api.contacts);
  }, [] );
  
  return (
    <div className="ContactsBar">
      <section className="user">
        <UserModel 
          name={userData.user_name}
          company={userData.company}
          profile_photo_url={userData.profile_photo_url}
        />
      </section>
      <section className="contactsManagement">
        <input 
          type="text"
          placeholder=""
        />
        
        <div className="filter">
          <p>EM ANDAMENTO </p>

          <button className="arrow">  </button>
          <button className="cross">  </button>
        </div>
      </section>

      <section className="contacts">
        {
          contactsListData.map(e => (
            <UserModel 
              name={e.user_name}
              company={e.company}
              profile_photo_url={e.profile_photo_url}
            />
          ))
        }
      </section>
    </div>
  );
}

export default ContactsBar;
