import React, { useState, useEffect} from "react";
import "./PortfolioEdit.css";
import { images } from "../../../assets/images/images";
import TopBar from "../../TopBar";
import PortfolioEditTimeline from './components/portfolioEditTimeline';
import PortfolioEditProfile from './components/portfolioEditProfile';
import PortfolioEditContent from './components/portfolioEditContent';
import AddWorkModal from './components/addWorkModal';
import { useCookies } from 'react-cookie';
import axios from 'axios';

interface Styles{
  displayNone:React.CSSProperties;
  stackBox:React.CSSProperties;
  stackName:React.CSSProperties;
  proficiencyBox:React.CSSProperties;
  page:React.CSSProperties;
  modal:React.CSSProperties;
  portfolioDetail:React.CSSProperties;
}
const styles:Styles = {
  displayNone: {
    display: "none",
  },
  stackBox:{
    display: "flex",
    flexDirection: "row",
    width: "100%",
    fontSize: "1rem",
  },
  stackName:{
    width: "20%",
    height: "1rem",
    fontSize: "0.7rem",
    marginRight: "5%",
    overflowWrap: "break-word",
  },
  proficiencyBox:{
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "60%",
    height: "1.1rem",
    margin: "0 0 1rem 0",
    fontSize: "1rem",
  },
  page:{
    width: "100%",
    maxWidth: "100vw",
    minHeight: "65rem",
  },
  modal:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    position:"fixed",
    bottom:"0%",
    width:"100%",
    height:"100%",
    backgroundColor:"rgba(0,0,0,0.8)",
    zIndex:"100",
  },
  portfolioDetail:{
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "73.8%",
  },
};

const PortfolioEdit: React.FC = () => {
  //사용자 기본 정보 관련 state
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState("22");
  const [collage, setCollage] = useState("국민대학교");
  const [departure, setDeparture] = useState("소프트웨어학부");
  const [profileImage, setProfileImage]:any = useState(images.noneProfile);
  const [mainImage, setMainImage] = useState(images.portfolioMainImage)
  const [cookies, setCookie, removeCookie] = useCookies(["userId", "accessToken"])

  //기술 스택 관련 state
  const [stacks, setStack] = useState([]);
  //요소들의 표시 여부를 나타내는 state
  const [viewList, setViewList] = useState({
    stack: true,
    timeline: true,
    license: true,
    sns: true,
    competition: true,
  });
  const [modalActive, setModalActive] = useState(false)
  const [workImageList, setWorkImageList] = useState<any[]>([])

  const inputEvent = (e:any)=>{
    var gradient = 100 / e.target.attributes.max.value as number;
     e.target.style.background = 
      'linear-gradient(to right, #7FA3C5 0%, #7FA3C5 '
      + gradient * e.target.value +'%, rgb(236, 236, 236) '
      + gradient *  e.target.value + '%, rgb(236, 236, 236) 100%)';
  };
  // 사용자의 스택을 입력받는 요소 생성 effect
  useEffect(() => {
    const initialStack: any = [];
    //get Data : dataList
    for (let i = 0; i < 5; i++) {
      initialStack.push(
        <div style={styles.stackBox}>
          <input style={styles.stackName} placeholder='기술 입력'/>
          <div style={styles.proficiencyBox}>
            <input type='range' min="1" max="100" onInput={inputEvent}/>
          </div>
        </div>
      );
    }
    setStack(initialStack);
  }, []);
  // toolBox 버튼을 누르면 해당 요소 활성화/비활성화하는 이벤트
  const checkViewListEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const idName: keyof typeof viewList = e.currentTarget
      .id as keyof typeof viewList;
    console.log(idName);
    const value: boolean = viewList[idName] ? false : true;
    setViewList((prev: typeof viewList) => ({ ...prev, [idName]: value }));
    console.log(viewList.stack);
  };
  // 모달의 표시 여부를 결정하는 이벤트
  const setModalEvent = (e:any)=>{
    const target = e.target as HTMLElement;
    if(target.id === 'modal'){
      setModalActive(false)
    }
  }
  return (
    <form style={styles.page}>
      <TopBar />
      {modalActive &&
        <div style={styles.modal} onClick={setModalEvent} id='modal'>
          <AddWorkModal 
            setWorkImageList={setWorkImageList}
            setModalActive={setModalActive}/>
        </div>
      }
      <PortfolioEditTimeline
        viewList={viewList}
        mainImage={mainImage}
        setMainImage={setMainImage} 
      />
      <div style={styles.portfolioDetail}>
        <PortfolioEditProfile props={{
          profileImage:profileImage,
          name:name,
          age:age,
          collage:collage,
          departure:departure,
          viewList:viewList,
          stacks:stacks,
        }}
        setProfileImage={setProfileImage}
        />
        <PortfolioEditContent props={{
          profileImage:profileImage,
          name:name,
          age:age,
          collage:collage,
          departure:departure,
          viewList:viewList,
          stacks:stacks,
          }} 
          checkViewListEvent={checkViewListEvent}
          setModalActive={setModalActive}
          setWorkImageList = {setWorkImageList}
          workImageList={workImageList} />
      </div>
    </form>
  );
};

export default PortfolioEdit;
