import React , {useState}from 'react';
import { images } from "../../../../assets/images/images";
import './MakeSecondPage.css'
import SecondPageUI from './UI/SecondPageUI';

const MakeSecondPage: React.FC = () => {
  const [second, setSecond] = useState(false)

  const onsecondUI = () => {
    setSecond(true)
  }

  const outsecondUI = () => {
    setSecond(false)
  }

  return (
    <div>
      <div id="second">
        <h2 style={{marginLeft:'3rem'}}>템플릿 선택</h2>
        <div className='template'>
          <div className="select">
            <div onMouseOver={onsecondUI} onMouseOut={outsecondUI} >
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
      
      </div>
    </div>
  )
}

export default MakeSecondPage