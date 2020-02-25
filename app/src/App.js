import React from 'react';

import ChatBox from './pages/ChatBox';
import ContactsBar from './components/ContactsBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <ContactsBar />
      <div className="Communication">
        <ChatBox />
      </div>
    </div>
  );
}

export default App;
