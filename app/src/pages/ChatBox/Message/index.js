import React from 'react';
import './styles.css';

const Message = () => {
  return (
    <div className="messageLine">
      <div className="messageBlock">

        <section className="aboutThisMessage">
          <img src="" alt="profilePhoto"/>

          <span>
            <strong>User Name </strong>
            <time> - xx/xx/xxxx xxhxx </time> 
          </span>
          
          <img src="" alt="checkread"/>
        </section>
        <p>a message</p>
      
      </div>
    </div>
  );
}

export default Message;
