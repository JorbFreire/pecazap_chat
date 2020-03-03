import React, { useState, useEffect } from 'react';
import UserModel from '../UserModel';

import api from '../../services/api.json';

import balloons from '../../assets/balloons.png';
import './styles.css';
import './attendantUser.css';
import './fistContact.css';

const ContactsBar = ()  => {
  const [userData, setUserData] = useState({});
  const [contactsListData, setContactsListData] = useState([]);

  useEffect ( () => {
    setUserData(api.user);
    setContactsListData(api.contacts);
  }, [] );
  
  return (
    <div className="ContactsBar">
      <section className="attendantUser">
        <UserModel 
          name={userData.user_name}
          company={userData.company}
          profile_photo_url={userData.profile_photo_url}
        />
        <button className="arrow">  </button>
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

      <img
        className="balloons"
        src={balloons} alt=""
      />
    </div>
  );
}

export default ContactsBar;
