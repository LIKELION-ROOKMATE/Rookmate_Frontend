import React from 'react';
import { images } from "../../../../assets/images/images";
import './MakeSecondPage.css'
import SecondPageUI from './UI/SecondPageUI';

const MakeSecondPage = () => {


  return (
    <div>
      
      <SecondPageUI/>

      <div id="second">
        <h2 style={{marginLeft:'3rem'}}>템플릿 선택</h2>
        <div className='template'>
          <div className="select">
            <div className='basicbtn_container'>
              <button id="basicbtn1"></button>
            </div>
            <div>
              <h2>Basic</h2>
              <div className="hashtag">
                <p>#심플한</p>
                <p>#모던한</p>
                <p>#깔끔한</p>
              </div>
              <p>깔끔하고 군더더기 없는 템플릿으로 포트폴리오를 시작해보세요!</p>
            </div>
            <div>
              <button id="nextbtn">Choose</button>
            </div>
          </div>
        </div>
        
        <div className='template'>
          <div className="select">
            <div>
              <button id="basicbtn2"><img src={images.MakeImage2} alt="RookMate"/></button>
            </div>
            <div>
              <h2>Basic</h2>
              <div className="hashtag">
                <p>#심플한</p>
                <p>#모던한</p>
                <p>#깔끔한</p>
              </div>
              <p>깔끔하고 군더더기 없는 템플릿으로 포트폴리오를 시작해보세요!</p>
            </div>
            <div>
              <button id="nextbtn">Choose</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakeSecondPage