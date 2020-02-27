import React from 'react';
import './styles.css';

const UserModel = (props) => {
  return (
    <div className="User">
      <img src={props.profile_photo_url} alt="UserProfilePhoto"/>
      <div className="UserInfo">
        <p>{props.name}</p>
        <sub>{props.company}</sub>
      </div>
    </div>
  )
}

export default UserModel;
