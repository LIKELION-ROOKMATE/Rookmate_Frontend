import React, {useState, useEffect} from 'react';
import TopBar from '../../TopBar';
import './OutsourcingApply.css';

import leftpoint from '../../../assets/images/leftpoint.png';
import profile from '../../../assets/images/profile.png';
import mail from '../../../assets/images/mail.png';

const OutsourcingApply:React.FC = ()=>{
  return(
    <div>
      <TopBar></TopBar>
      <div className='outsourcingApply'>
        <img src={leftpoint}/>
        <div className='outsourcingInfo'>
          <div className='infoBox'>
            <p className='title'>시디학생의  로고디자인.타이포그래피</p>
            <div className='contentHead'>
              <img src={profile}/>
              <div className='userInfo'>
                <div className='name'>김용민</div>
                <div className='organization'>국민대학교/소프트웨어학부</div>
              </div>
              <div className='others'>
                <img src={mail}/>
                <img src={mail}/>
                <img src={mail}/>
                <img src={mail}/>
              </div>
            </div>
            <div className='content'></div>
          </div>
          <div className='imgBox'></div>
        </div>
      </div>
    </div>
  )
}

export default OutsourcingApply;