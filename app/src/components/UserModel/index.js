import React from 'react';
import UserProfilePhoto from '../../assets/profile_img.png';
import './styles.css';

const UserModel = () => {
  return (
    <div className="User">
      <img src={UserProfilePhoto} alt="UserProfilePhoto"/>
      <div className="UserInfo">
        <p>My Name</p>
        <sub>My Company</sub>
      </div>
    </div>
  )
}

export default UserModel;
