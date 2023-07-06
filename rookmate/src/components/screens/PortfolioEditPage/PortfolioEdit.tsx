import React, { useState, useEffect, useRef} from "react";
import "./PortfolioEdit.css";
import { images } from "../../../assets/images/images";
import TopBar from "../../TopBar";
import PortfolioEditTimeline from './components/portfolioEditTimeline';
import PortfolioEditProfile from './components/portfolioEditProfile';
import PortfolioEditContent from './components/portfolioEditContent';
import AddWorkModal from './components/addWorkModal';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles:{[key:string]:React.CSSProperties} = {
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
  const [name, setName] = useState("undefined");
  const [age, setAge] = useState<number>(0);
  const [collage, setCollage] = useState("undefined");
  const [departure, setDeparture] = useState("undefined");
  const [profileImage, setProfileImage]:any = useState(images.noneProfile);
  const [mainImage, setMainImage] = useState(images.portfolioMainImage)
  const [snsId, setSnsId] = useState({
    "git":undefined,
    "instagram":undefined,
    "twitter":undefined,
  })
  const [cookies, setCookie, removeCookie] = useCookies(["userId", "accessToken", "refreshToken"])

  //기술 스택 관련 state
  const [stacks, setStack] = useState<any[]>([]);
  const [inputStacks, setInputStack] = useState<{[key:number]:{[key:string]:number}}>({});
  //요소들의 표시 여부를 나타내는 state
  const [viewList, setViewList] = useState({
    stack: true,
    timeline: true,
    license: true,
    sns: true,
    competition: true,
  });
  const [modalActive, setModalActive] = useState(false)
  const [workImageList, setWorkImageList] = useState<any>([])
  const navigate = useNavigate();

  const inputEvent = (e:any)=>{
    const parent = e.target.parentNode;
    const keyNumber:number = Number(parent.id);//inputStack에 저장할 번호
    const skillName:string = parent.childNodes[0].value;//기술명 입력받는 input 태그
    const value = parent.childNodes[1].value;//입력값
    if(!skillName) return false;
    setInputStack((prev)=>({...prev, [keyNumber]:{[skillName]:value}}));
    e.target.style.background = 
    'linear-gradient(to right, #7FA3C5 0%, #7FA3C5 '
    + e.target.value +'%, rgb(236, 236, 236) '
    + e.target.value + '%, rgb(236, 236, 236) 100%)';
  };
  // 사용자의 스택을 입력받는 요소 생성 effect
  useEffect(() => {
    const initialStack: any = [];
    //get Data : dataList
    for (let i = 0; i < 5; i++) {
      initialStack.push(
        <div style={styles.stackBox} key={String(i)} id={String(i)}>
          <input style={styles.stackName} placeholder={"기술 입력"} onChange={inputEvent}/>
          <input type='range' min="1" max="100" onChange={inputEvent} style={styles.proficiencyBox}/>
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
  // 기술 스택을 저장하는 함수
  const portfolio_uuid = "b41cc596-4ebe-490e-996c-5914246504c0";
  const saveSkillStack = ()=>{
    for(let e in inputStacks){
      const data = inputStacks[e];
      const skillName = Object.keys(data)[0] as string;
      const value = Number(data[skillName]);
      axios.post(`http://127.0.0.1:8000/portfolios/${cookies.userId}/portfolio_abilities/`,{
        ability:skillName,
        mastery:value
      })
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  }
  // 수정 사항 저장 후 view 페이지로 이동
  const completeEditEvent = ()=>{
    axios.defaults.withCredentials = true;
    axios.post('http://127.0.0.1:8000/portfolios/',{
      description: "string",
      certification: "string",
      career: "string",
      git: snsId.git,
      instagram: snsId.instagram,
      twitter: snsId.twitter,
      headers:{
        uuid:cookies.userId,
        Authorization:cookies.accessToken,
        withCredentials:true
      },
      Authorization:cookies.accessToken,
    })
    .then((res)=>{
      console.log("success!");
      console.log(res);
      navigate("/portfolio/view/");
    })
    .catch((err)=>{
      console.log("error!");
      console.log(err);
    })
    saveSkillStack();
  }
  return (
    <div style={styles.page}>
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
          setInputStack:setInputStack,
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
          completeEditEvent = {completeEditEvent}
          workImageList={workImageList} />
      </div>
    </div>
  );
};

export default PortfolioEdit;
