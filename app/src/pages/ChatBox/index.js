import React from 'react';

import CommunicationChannels from '../../components/CommunicationChannels';
import ContactInfoModel from '../../components/ContactInfoModel';
import TolsBar from './TolsBar';
import './styles.css';

const ChatBox = () => {
  return (
    <div className="ChatBoxPage">
      <CommunicationChannels />
      <div className="ChatBox">
        <TolsBar />
        <p>sometext</p>
      </div>
      <ContactInfoModel />
    </div>
  );
}

export default ChatBox;
