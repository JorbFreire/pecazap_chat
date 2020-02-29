import React, { useState, useEffect } from 'react';

import CommunicationChannels from '../../components/CommunicationChannels';
import ContactInfoModel from '../../components/ContactInfoModel';
import Message from './Message';
import ToolsBar from './ToolsBar';

import api from '../../services/api.json';

import './styles.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(api.chat);
  }, []);
  
  return (
    <div className="ChatBoxPage">
      <CommunicationChannels />
      <div className="ChatBox">

        <ToolsBar />
        <div className="scroll">
          <section cclassName="messages">
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
        </div>

        <form className="newMessage">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
          />

          {/* icons */}
          <button></button>
          <button></button>
          <button></button>
          <button></button>

        </form>

      </div>
      <ContactInfoModel />
    </div>
  );
}

export default ChatBox;
