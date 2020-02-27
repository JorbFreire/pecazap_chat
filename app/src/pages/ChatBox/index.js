import React, { useState, useEffect } from 'react';

import CommunicationChannels from '../../components/CommunicationChannels';
import ContactInfoModel from '../../components/ContactInfoModel';
import Message from './Message';
import ToolsBar from './ToolsBar';

import api from '../../services/api.json';

import './styles.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  //usar props e super pra tornar o className das mensagens dinamico e alterar tanto as informações de destinatario quanto a cor do background e o posicionamento das mensagens 

  useEffect(() => {
    setMessages(api.chat);
  }, []);
  return (
    <div className="ChatBoxPage">
      <CommunicationChannels />
      <div className="ChatBox">
        <ToolsBar />

        <section className="messages">
          {
            messages.map(e => (
              <Message
                send_by   = {e.send_by}
                date      = {e.date}
                time      = {e.time}
                content   = {e.content}
                client_id = {0}
              />
            ))
          }
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
