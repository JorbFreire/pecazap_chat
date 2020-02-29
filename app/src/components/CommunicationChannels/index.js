import React from 'react';
import './styles.css';

import calendarIcon from '../../assets/icons/calendar.png';
import mailIcon from '../../assets/icons/mail.png';
import skypeIcon from '../../assets/icons/skype.png';
import whatsAppIcon from '../../assets/icons/whatsApp.png';


const CommunicationChannels = () => {
  return (
    <div className="communicationChannels">
      <a href="">
        <div className="channel">
          <img src={calendarIcon} alt="calendarIcon"/>
        </div>
      </a>
      
      <a href="">
        <div className="channel" id="whatsApp">
          <img src={whatsAppIcon} alt="whatsAppIcon"/>
        </div>
      </a>

      <a href="">
        <div className="channel" id="mail">
          <img src={mailIcon} alt="mailIcon"/>
        </div>
      </a>
        
      <a href="">
        <div className="channel" id="skype">
          <img src={skypeIcon} alt="skypeIcon"/>
        </div>
      </a>
        
    </div>
  );
}

export default CommunicationChannels;
