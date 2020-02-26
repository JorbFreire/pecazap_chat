import React from 'react';
import UserModel from '../UserModel';
import './styles.css';

const ContactInfoModel = () => {
  return (
    <div className="ContactInfo">
      <UserModel />
      <div className="tools">
        
        <section className="buttons">
          <button>EDIT</button>
          <div />
          <button>DELETE</button>
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
