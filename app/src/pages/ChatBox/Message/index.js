import React from 'react';
import api from '../../../services/api.json';

import check from '../../../assets/icons/check.png';
import './styles.css';
import './stylesForSend_by.css'

const Message = (props) => {
  
  const howSentThisMessage = (client_id) => {
    let user;
    switch (props.send_by){
      case "attendant":{
        user = api.user;
        break;
      }
      case "client": {
        user = api.contacts[client_id];
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

            <img src={howSentThisMessage(props.client_id).profile_photo_url} alt="profilePhoto"/>

            <span>
              <strong> { howSentThisMessage(props.client_id).user_name } </strong>
              <time> {props.date} {props.time} </time> 
            </span>
            
            <img src={check} alt="checkread"/>
          
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
