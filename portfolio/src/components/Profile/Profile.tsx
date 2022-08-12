import React from 'react';

import { Typography } from '@material-ui/core'
import {CustomDownloadButton} from '../Button/Button';
import GetAppIcon from "@material-ui/icons/GetApp"
import {data} from '../../utils/data'

import './Profile.css'

let profileInfo = data.info

let date = new Date();
let age = 0;
if(date.getMonth() > profileInfo.birthDate.getMonth() || (date.getMonth() === profileInfo.birthDate.getMonth() && date.getDay() >= profileInfo.birthDate.getMonth())){
  age = date.getFullYear()-profileInfo.birthDate.getFullYear();
}
else age = date.getFullYear()-profileInfo.birthDate.getFullYear()-1

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>Nuno Jesus</Typography>
        <Typography className='title'>Application Engineer</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require('../../assets/images/profile.png')} alt=""/>
      </figure>

      <div className='profile_information'>
          <ul>
            <li><b className='profile_information_title'>Nome:</b> {profileInfo.name} </li>
            <li><b className='profile_information_title'>Email:</b> {profileInfo.email} </li>
            <li><b className='profile_information_title'>Idade:</b> {age}</li>
          </ul>
          
          <div className='btn_container'>
            <CustomDownloadButton text={'Curriculo'} download={require("../../assets/files/cv.pdf")} fileName={'CV.pdf'} icon={<GetAppIcon />}/>
          </div>
      </div>
    </div>
  )
}

export default Profile