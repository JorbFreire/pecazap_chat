import React from 'react';
import './styles.css';


const UserModel = (props) => {
  return (
    <div className="User">
      <img
        src={props.profile_photo_url}
        alt="UserProfilePhoto"
        className="UserProfilePhoto"
      />
      <div className="UserInfo">
        <p>{props.name}</p>
        <p>
          <sub>{props.company}</sub>
        </p>
      </div>
      <div className="notifications">
        <p></p>
      </div>
    </div>
  )
}

export default UserModel;
