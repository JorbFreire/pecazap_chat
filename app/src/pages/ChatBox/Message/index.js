import React, { useState } from 'react';
import api from '../../../services/api.json';

import './styles.css';
import './stylesForSend_by.css'

const Message = (props) => {
  
  function howSentThisMessage(client_id){
    let user;
    switch (props.send_by){
      case "attendant":{
        user = api.user.user_name;
        break;
      }
      case "client": {
        user = api.contacts[client_id].user_name;
        break;
      }
      default: {
        user = "none";
        break;
      }
    }
    return user;
  }

  return (
    <div className="MessageElement">
      <div className="messageLine">
        <div className="messageBlock" id={props.send_by}>

          <section className="aboutThisMessage">

            <img src="" alt="profilePhoto"/>

            <span>
              <strong>{ howSentThisMessage(props.client_id) }</strong>
              <time> - {props.date} {props.time} </time> 
            </span>
            
            <img src="" alt="checkread"/>
          
          </section>

          <section className="arrowAlign">
            <div className="arrow" />
          </section>
          
          <section className="content">
            <p>{props.content}</p>
          </section>
        
        </div>
      </div>
    </div>
  );
}

export default Message;
