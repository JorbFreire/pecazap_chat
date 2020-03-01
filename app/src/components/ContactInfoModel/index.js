import React, { useState, useEffect} from 'react';
import UserModel from '../UserModel';
import api from '../../services/api.json';

import mailIcon from '../../assets/icons/mail.png';
import skypeIcon from '../../assets/icons/skype.png';
import whatsAppIcon from '../../assets/icons/whatsApp.png';
import phoneIcon from '../../assets/icons/phone.png';
import messageIcon from '../../assets/icons/message.png';

import './styles.css';

const ContactInfoModel = () => {
  const [thisContactData, setThisContactData] = useState({});
  const [lastTalks, setLastTalks] = useState([]);

  function findChannelIcon(channel) {
    let channelIcon;
    
    switch (channel){
      case "mail": {
        channelIcon = mailIcon;
        break
      }
      case "skype": {
        channelIcon = skypeIcon;
        break
      }
      case "whatsApp": {
        channelIcon = whatsAppIcon;
        break
      }
      case "phone": {
        channelIcon = phoneIcon;
        break
      }
      case "message": {
        channelIcon = messageIcon;
        break
      }
      default: {
        break;
      }
    }

    return channelIcon;
  }

  useEffect ( () => {
    setThisContactData(api.contacts[0]);
    setLastTalks(api.contacts[0].last_talks)
    console.log(thisContactData);
  }, [] );

  return (
    <div className="ContactInfo">
      <UserModel
        name={thisContactData.user_name}
        company={thisContactData.company}
        profile_photo_url={thisContactData.profile_photo_url}
      />

      <div className="info">
        
        <section className="buttons">
          <button className="edit"></button>
          <div />
          <button className="delete"></button>
        </section>

        <section className="lastConversations">
          <span>ÚLTIMAS CONVERSAS</span>
          {lastTalks.map(e => (
            <>
              <img src={findChannelIcon(e.channel)} alt="icon"/>
              <p>{e.date}</p>
              <p>(x dias atrás)</p>
            </>
          ))}
          <p>xx/xx/xxxx (xx dias atrás) </p>
        </section>

        <section className="observations">
          <span>OBSERVAÇÕES</span>
          <p>{thisContactData.observations}</p>
        </section>
      
      </div>
    </div>
  )
}

export default ContactInfoModel;
