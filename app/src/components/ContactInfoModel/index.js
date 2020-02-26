import React from 'react';
import UserModel from '../UserModel';
import './styles.css';

const ContactInfoModel = () => {
  return (
    <div className="ContactInfo">
      <UserModel />
      <div className="tools">
        <div className="buttons">
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
        <div className="lastConversations">
          <span>Ultimas conversas</span>
          <p>xx/xx/xxxx (xx dias atrás) </p>
          <p>xx/xx/xxxx (xx dias atrás) </p>
          <p>xx/xx/xxxx (xx dias atrás) </p>
        </div>
        <div className="observations">
          <span>OBSERVAÇÕES</span>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoModel;
