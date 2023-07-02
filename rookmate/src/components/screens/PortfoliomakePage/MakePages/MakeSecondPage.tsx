import React , {useState}from 'react';
import { images } from "../../../../assets/images/images";
import './MakeSecondPage.css'
import SecondPageUI from './UI/SecondPageUI';
import PortfolioView from '../../PortfolioViewPage/PortfolioView';
import MakeProgress from '../MakeProgress';

const MakeSecondPage: React.FC = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const onsecondUI = () => {
    setSecond(true);
  }

  const outsecondUI = () => {
    setSecond(false);
  }

  const goThirdPage = () => {
    setThird(true);
  }

  return (
    <div>
      <MakeProgress/>
      <div id="second">
        <h2 style={{marginLeft:'3rem'}}>템플릿 선택</h2>
        <div className={!third ? 'template' : 'template invisible'} onClick={goThirdPage}>
          <div className="select" onMouseOver={onsecondUI} onMouseOut={outsecondUI}>
            <div className='second_img_frame' >
              {second && <SecondPageUI/>}
              {!second &&<img src={images.MakeImage1} alt="MakeImage" />}
            </div>
            <div className='template_content'>
              <h2>Basic</h2>
              <div className="hashtag">
                <p>#심플한</p>
                <p>#모던한</p>
                <p>#깔끔한</p>
              </div>
              <p>깔끔하고 군더더기 없는 템플릿으로 포트폴리오를 시작해보세요!</p>
            </div>
          </div>
        </div>
        {third && <PortfolioView/>}
        <div className='template' style={{display:'none'}}>
          <div className="select">
            <div className='second_img_frame' >
              {/* {second && <SecondPageUI/>}
              {!second &&<img src={images.MakeImage1} alt="MakeImage" />} */}
              <img src={images.MakeImage2} alt="" />
            </div>
            <div className='template_content'>
              <h2>Basic</h2>
              <div className="hashtag">
                <p>#심플한</p>
                <p>#모던한</p>
                <p>#깔끔한</p>
              </div>
              <p>깔끔하고 군더더기 없는 템플릿으로 포트폴리오를 시작해보세요!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MakeSecondPage