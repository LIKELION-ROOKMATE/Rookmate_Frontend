import React, { Fragment } from 'react';
import './Portfoliomake.css';
import makeimage1 from '../../../assets/images/makeimage1.png'
import makeimage2 from '../../../assets/images/makeimage2.png'


const PortfoliomakePage = ()=>{

  const dark = document.getElementById('dark');
  const detailtemplate = document.getElementById('detailtemplate');
  const basicbtn = document.getElementById('basicbtn');
  const closebtn = document.getElementById('closebtn');
  const nextbtn3 = document.getElementById('.nextbtn3')
  
  //function
  const showdetail = () => {
    darkdrop();
    adddetail();
  };
  
  const closedetail = () => {
    darkdrop();
    deletedetail();
  }
  
  const darkdrop = () => {
    dark.classList.toggle('visible');
  };
  
  const adddetail = () => {
    detailtemplate.classList.add('visible');
  };
  
  const deletedetail = () => {
    detailtemplate.classList.remove('visible');
  };
  
  //click
  basicbtn.addEventListener('click', showdetail);
  closebtn.addEventListener('click', closedetail);
  dark.addEventListener('click', closedetail);
  nextbtn3.addEventListener('click', () => {
    
  })

  return(
    <Fragment>
      <div id="progress">
    <div className="progress_frame">
      <div id="circle1" class="circle">
        <p>1</p>
      </div>
      <p>약관동의</p>
    </div>
    <div className="progress_frame">
      <div id="circle2" class="circle">
        <p>2</p>
      </div>
      <p>개인정보입력</p>
    </div>
    <div className="progress_frame">
      <div id="circle3" class="circle">
        <p>3</p>
      </div>
      <p>템플릿 선택</p>
    </div>
    <div className="progress_frame">
      <div id="circle4" class="circle">
        <p>4</p>
      </div>
      <p>프로필 만들기</p>
    </div>
  </div>
  <div id="first"></div>
  <div id="second"></div>
  <div id="third">
    <div id="dark"></div>
    <div id="detailtemplate">
      <div id="closebtn_frame">
        <button id="closebtn">X</button>
      </div>
      <div className="select_frame">
        <div className="select">
          <div>
            <img src={makeimage1} alt="RookMate"/>
          </div>
          <div style="margin-left: 6rem;">
            <h2>Basic</h2>
            <div className="hashtag">
              <p>#심플한</p>
              <p>#모던한</p>
              <p>#깔끔한</p>
            </div>
            <p>Recommand</p>
            <div className="hashtag">
              <p>인테리어전공</p>
              <p>코딩전공</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2>템플릿 선택</h2>
    <div className="select">
      <div>
        <button id="basicbtn"><img src={makeimage1} alt="RookMate"/></button>
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
        <button id="nextbtn3">Confirm</button>
      </div>
    </div>
    <div className="select">
      <div className="premium">
        <button><img src={makeimage2.png} alt="RookMate"/></button>
      </div>
      <div>
        <h2>Modern</h2>
        <div className="hashtag">
          <p>#깔끔한</p>
          <p>#분위기있는</p>
          <p>#모던한</p>
        </div>
        <p>분위기 있는 디자인 팜플렛으로 포트폴리오를 시작해보세요!</p>
      </div>
      <div>
        <button id="nextbtn3">Confirm</button>
      </div>
    </div>
  </div>
  <div id="forth">

  </div>
    </Fragment>
  );
}

export default PortfoliomakePage;