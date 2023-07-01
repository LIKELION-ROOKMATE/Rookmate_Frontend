import React, {useState, useEffect} from 'react';
import '../OutsourcingApply.css';
import { images } from "../../../../assets/images/images";


const OustsourcingInfo:React.FC = ()=>{
  return(
    <div className='outsourcingInfoRoot'>
      <a><img src={images.leftPoint} className='back' alt='back'/></a>
      <div className='outsourcingInfoBox'>
        <div className='outsourcingInfo'>
          <p className='title'>시디학생의  로고디자인.타이포그래피</p>
          <div className='content-box'>
            <img src={images.profile} className='profile' alt='profile'/>
            <div className="content">
              <div className='contentHead'>
                <div className='userInfo'>
                  <div className='name'>홍길동</div>
                  <div className='organization'>국민대학교/시각디자인학과</div>
                </div>
                <div className='tools'>
                  <img src={images.share} alt='share'/>
                  <img src={images.mail} alt='mail'/>
                  <img src={images.bookMark} alt='bookMark'/>
                  <img src={images.thumbsUp} alt='thumbsUp'/>
                </div>
              </div>
              <div className='field'>시각디자인</div>
              <div className='explain'>
                로고디자인 기깔나게 해드립니다.
                한가로운 날씨에 신나게 노래를 부르며, 꽃들과 함께 향기로운 산책을 즐길 수 있는 아름다운 공원에서 시간을 보내는 것은 참으로 행복한 일이다.
                바람은 부드럽게 불어오고, 새들은 활짝 날개를 펴고 우리를 맞이한다.
                푸른 잔디밭 위에는 사람들이 자리를 마련하고, 웃음소리와 함께 웅장한 피크닉이 열린다.
                어린이들은 기뻐서 놀라운 모험을 즐기며 뛰어다니고, 어른들은 휴식과 평온을 찾는다.
                이 공원은 자연과 인간의 조화로운 만남의 장소로, 일상의 스트레스를 잊고 여유로운 시간을 누릴 수 있는 특별한 곳이다.
              </div>
            </div>
          </div>
        </div>

        <div className="outsourcingImg">
          <div className='mainImgBox imageBox'>
            <img src={images.portfolioMainImage} alt='mainImage'/>
          </div>
          <div className='subImageBox'>
            <div className='subImage imageBox'>
              <img src={images.mainPageTopAdImage} className='image' alt='subImage'></img>
            </div>
            <div className='subImage imageBox'>
              <img src={images.mainPageTopAdImage} alt='subImage'></img>
            </div>
            <div className='subImage imageBox'>
              <img src={images.mainPageTopAdImage} alt='subImage'></img>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OustsourcingInfo