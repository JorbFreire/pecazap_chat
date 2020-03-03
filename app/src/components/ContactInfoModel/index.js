import React, { useState, useEffect} from 'react';
import UserModel from '../UserModel';
import api from '../../services/api.json';
import './clientUser.css';

import mailIcon from '../../assets/icons/grey/mail.png';
import skypeIcon from '../../assets/icons/grey/skype.png';
import whatsAppIcon from '../../assets/icons/grey/whatsApp.png';
import phoneIcon from '../../assets/icons/grey/phone.png';
import messageIcon from '../../assets/icons/grey/message.png';

import './styles.css';

const ContactInfoModel = () => {
  const [thisContactData, setThisContactData] = useState({});
  const [lastTalks, setLastTalks] = useState([]);
  const [channels, setChannels] = useState([]);

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
    setChannels(api.contacts[0].channels);
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
            <div className="lastConversationInfo">
              <img src={findChannelIcon(e.channel)} alt="icon"/>
              <p>{e.date} (x dias atrás)</p>
            </div>
          ))}
        </section> 

        <section className="observations">
          <span>OBSERVAÇÕES</span>
          <p>{thisContactData.observations}</p>
        </section>

        <section className="availableChannels">
          {
            channels.map(e => (
              <div className="channel">
                <img src={findChannelIcon(e.name)} alt=""/>
                <div>
                  <span> {e.name} </span>
                  <p> {e.endress} </p>
                </div>
              </div>
            )) 
          }
        </section>
      
      </div>
    </div>
  )
}

export default ContactInfoModel;
