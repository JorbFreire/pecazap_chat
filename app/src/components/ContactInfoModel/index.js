import React, { useState, useEffect} from 'react';
import UserModel from '../UserModel';
import api from '../../services/api.json';
import './styles.css';

const ContactInfoModel = () => {
  const [userData, setUserData] = useState({});

  useEffect ( () => {
    setUserData(api.contacts[0]);
  }, [] );

  return (
    <div className="ContactInfo">
      <UserModel
        name={userData.user_name}
        company={userData.company}
        profile_photo_url={userData.profile_photo_url}
      />

      <div className="info">
        
        <section className="buttons">
          <button className="edit"></button>
          <div />
          <button className="delete"></button>
        </section>

        <section className="lastConversations">
          <span>ÚLTIMAS CONVERSAS</span>
          <p>xx/xx/xxxx (xx dias atrás) </p>
          <p>xx/xx/xxxx (xx dias atrás) </p>
          <p>xx/xx/xxxx (xx dias atrás) </p>
        </section>

        <section className="observations">
          <span>OBSERVAÇÕES</span>
          <p></p>
        </section>
      
      </div>
    </div>
  )
}

export default ContactInfoModel;
