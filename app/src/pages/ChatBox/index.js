import React from 'react';

import CommunicationChannels from '../../components/CommunicationChannels';
import ContactInfoModel from '../../components/ContactInfoModel';
import ToolsBar from './ToolsBar';
import './styles.css';

const ChatBox = () => {
  return (
    <div className="ChatBoxPage">
      <CommunicationChannels />
      <div className="ChatBox">
        <ToolsBar />
      </div>
      <ContactInfoModel />
    </div>
  );
}

export default ChatBox;
