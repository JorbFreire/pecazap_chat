import React from 'react';
import UserModel from '../UserModel';
import './styles.css';

const ContactInfoModel = () => {
  return (
    <div className="ContactInfo">
      <UserModel />
      <div className="tols">
        <button>EDIT</button>
        <button>DELETE</button>
        <div className="lastConversations">
          <p>Ultimas conversas</p>
          <p>xx/xx/xxxx (xx dias atrás) </p>
          <p>xx/xx/xxxx (xx dias atrás) </p>
          <p>xx/xx/xxxx (xx dias atrás) </p>
        </div>
        <div className="observations">
          <p>OBSERVAÇÕES</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoModel;
