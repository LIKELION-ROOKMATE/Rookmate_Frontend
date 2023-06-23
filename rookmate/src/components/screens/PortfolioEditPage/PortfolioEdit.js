import React, {useState, useEffect} from 'react';
import mainImage from '../../../assets/images/portfolioMainImage.png';
import noneProfile from '../../../assets/images/noneProfile.png';
import addSomething from '../../../assets/images/addSomething.png';
import instagram from '../../../assets/images/instagram.png';
import github from '../../../assets/images/github.png';
import kakao from '../../../assets/images/kakao.png';
import facebook from '../../../assets/images/facebook.png';
import './PortfolioEdit.css';

const style = {
  DisplayNone:{
    display:'none',
  },
}

const PortfolioView = ()=>{

  const [profileImage, setProfileImage] = useState(noneProfile);
  
  //사용자 기본 정보 관련 state
  const [name, setName] = useState('이름을 넣어주세요.');
  const [age, setAge] = useState('나이를 넣어주세요.');
  const [collage, setCollage] = useState('대학교를 넣어주세요.');
  const [departure, setDeparture] = useState('학과를 넣어주세요.');
  
  //기술 스택 관련 state
  const [stacks, setStack] = useState([]);

  //요소들의 표시 여부를 나타내는 state
  const [viewList, setViewList] = useState({
    stack:true,
    timeline:true,
    license:true,
    sns:true,
    competition:true,
  });

  // 서버에서 사용자 기술 스택 받아와서 반영하는 effect
  useEffect(() => {
    const initialStack = [];
    //get Data : dataList
    const skillStack = ["Spring", "django", "Java", "React", "Algorithm"]
    const dataList = [40, 50, 60,30, 80];
    for (let i = 0; i < dataList.length; i++) {
      initialStack.push(
        <div className='stackBox'>
          <p className='stackName'>{skillStack[i]}</p>
          <div className='proficiencyBox'>
            <div style={{ width: `${dataList[i]}%` }} className='proficiency'>&nbsp;</div>
          </div>
        </div>
      );
    }
    setStack(initialStack);
  }, []);

  // toolBox 버튼을 누르면 해당 요소 활성화/비활성화하는 이벤트
  const checkViewListEvent = (e)=>{
    const idName = e.target.id;
    console.log(idName)
    const value = viewList[idName]?false:true
    setViewList(prev => ({...prev, [idName]:value}))
    console.log(viewList.stack)
  }

  return(
    <div className='page'>
      <div className="img-timeline-box">
        <img src={mainImage} alt="main-img" className="main-img"/>
        <div className = 'timeline' style={viewList.timeline?{}:style.DisplayNone}>
          <div className="timeline-element">
            <p className="point"></p>
            <p className="title">rookmate</p>
            <p className='content'>기록을 적어주세요. 최대 20자</p>
          </div>
        </div>
      </div>


      <div className='portfolioDetail'>
        <div className='profile'>
          <p className='title'>프로필</p>
          <img src={profileImage} className='profileImage'/>

          <div className='userInfo'>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Collage : {collage}</p>
            <p>Departure : {departure}</p>
          </div>
          <div className='divisorLine'></div>

          <div className='stack' style={viewList.stack?{}:style.DisplayNone}>
            <p className='title'>스택</p>
            {stacks}
          </div>
          <div className='divisorLine'></div>

          <div className='SNS' style={viewList.sns?{}:style.DisplayNone}>
            <div className='title'>SNS</div>
            <div className='snsList'>
              <div className='snsElement'>
                <img src={kakao}/>
                <p className='snsId'>ID</p>
              </div>
              <div className='snsElement'>
                <img src={instagram}/>
                <p className='snsId'>ID</p>
              </div>
              <div className='snsElement'>
                <img src={github}/>
                <p className='snsId'>ID</p>
              </div>
              <div className='snsElement'>
                <img src={facebook}/>
                <p className='snsId'>ID</p>
              </div>
            </div>
          </div>
          <div className='divisorLine'></div>
        </div>

        <div className='portfolioContent'>
          <div className='workList'>
            <img src={addSomething} className='addSomething'/>
          </div>
          <div className='templateEditTools'>
            <button className='completeButton'>Complete</button>
            <div className='toolBoxGroup'>
              <p className='explain'>원하는 목록을 추가하세요.</p>
              <div className='toolBox'>
                <button onClick={checkViewListEvent} id='stack' style={viewList.stack?{}:{color:'grey'}}>스택</button>
                <button onClick={checkViewListEvent} id='timeline' style={viewList.timeline?{}:{color:'grey'}}>타임라인</button>
                <button onClick={checkViewListEvent} id='license' style={viewList.license?{}:{color:'grey'}}>자격증</button>
                <button onClick={checkViewListEvent} id='sns' style={viewList.sns?{}:{color:'grey'}}>SNS</button>
                <button onClick={checkViewListEvent} id='competition' style={viewList.competition?{}:{color:'grey'}}>공모전</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default PortfolioView;