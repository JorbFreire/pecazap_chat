import React from 'react';

import CommunicationChannels from '../../components/CommunicationChannels';
import ContactInfoModel from '../../components/ContactInfoModel';
import Message from './Message';
import ToolsBar from './ToolsBar';

import './styles.css';

const ChatBox = () => {
  //usar props e super pra tornar o className das mensagens dinamico e alterar tanto as informações de destinatario quanto a cor do background e o posicionamento das mensagens 
  return (
    <div className="ChatBoxPage">
      <CommunicationChannels />
      <div className="ChatBox">
        <ToolsBar />
        <section className="messages">
          <Message />
        </section>

        <form className="newMessage">
          <input type="text"/>
        </form>
      </div>
      <ContactInfoModel />
    </div>
  );
}

export default ChatBox;
