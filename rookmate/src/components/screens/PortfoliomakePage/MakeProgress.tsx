import React from 'react';
import MakeSecondPage from './MakePages/MakeSecondPage';
import './MakeProgress.css'
import TopBar from '../../TopBar';

const MakeProgress: React.FC = () => {
  return (
    <div>
      <div style={{width:'90rem', margin: "0 auto"}}>
        <TopBar/>
      </div>
      <div id="progress">
        <div className="progress_frame">
          <div className="circle">
            <p>1</p>
          </div>
          <p>약관동의</p>
          </div>
        <div className="progress_frame">
          <div className="circle circle_shadow">
            <p>2</p>
          </div>
          <p>템플릿 선택</p>
        </div>
        <div className="progress_frame">
          <div className="circle">
            <p>3</p>
          </div>
          <p>프로필 만들기</p>
        </div>
      </div>
    </div>
  )
}

export default MakeProgress