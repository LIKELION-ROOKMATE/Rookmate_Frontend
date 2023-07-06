import React, { useState, useEffect } from "react";
import { images } from "../../../assets/images/images";
import TopBar from "../../TopBar";
import PortfolioViewTimeline from './components/portfolioViewTimeline';
import PortfolioViewProfile from './components/portfolioViewProfile';
import PortfolioViewContent from './components/portfolioViewContent';
import PortfolioViewUserComment from './components/portfolioViewUserComment';
import PortfolioViewReview from './components/portfolioViewReview';
//import StartOutsourcingModal from './components/startOutsourcingModal';
import VerificationModal from '../PortfolioStartPage/VerificationModal';
import axios from 'axios';
import { useCookies } from "react-cookie";

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
    fontSize: "0.8rem",

    marginRight: "5%",
    
    overflowWrap: "break-word",
  },
  proficiencyBox:{
    position: "relative",

    width: "60%",
    height: "1.1rem",

    margin: "0 0 1rem 0",
    border: "2px solid #7FA3C5",
    borderRadius: "10px",

    fontSize: "1rem",
  },
  proficiency:{
    position: "relative",
    right: "0.1rem",

    backgroundColor: "#7FA3C5",
    height: "100%",

    borderRadius: "10px",
  },
  page:{
    width: "100vw",
    maxWidth: "100rem",
  },
  modalBackground:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

    position: "fixed",
    bottom: "0%",

    width: "100%",
    height: "100%",

    zIndex:"100",
    backgroundColor:"rgba(0,0,0,0.8)",
  },
  portfolioDetail:{
    display: "flex",
    flexDirection: "row",

    width:"100vw",
    maxWidth:"100rem",
    height: "73.8%",
  },
  portfolioDetailLeft:{
    paddingLeft: "6.5%",
    boxShadow: "-4px 0px 16px 8px rgba(0, 0, 0, 0.25)",
    width: "77%",
  },
  portfolioDetailLeftMenu:{
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    columnGap: "3.9rem",

    width: "100%",
    height: "3.5rem",
  },
  menuButton:{
    border:"none",
    paddingLeft:"0",

    backgroundColor:"#fff",

    fontSize: "1rem",
    fontWeight: "600",
    cursor:"pointer",
  }
};
const CurrentUserInfo = {
  haveOutsourcing:false, 
};
const userComment = {
  user1:{
    id:"kimym8821",
    profile:images.github,
    date:"2023-06-26",
    comment: "I need very long long long long long long long long long long long long long long long long long long long long long long long text",
    work:"work1",
    prefer:"12",
  },  
  user2:{
    id:"user2user2",
    profile:images.github,
    date:"2023-06-27",
    comment: "hello world",
    work:"work1",
    prefer:"10",
  },
  user3:{
    id:"3user3user",
    profile:images.github,
    date:"2023-06-28",
    comment: "typescript && React",
    work:"work2",
    prefer:"8",
  },
};
const userReview = {
    user1:{
    id:"kimym8821",
    profile: images.github,
    score: "매우 만족",
    workImage:images.mainPageTopAdImage,
    date:"2023-06-26",
    comment: "user1 comment",
    prefer:"12",
  },  
  user2:{
    id:"user2user2",
    profile: images.github,
    score: "불만족",
    workImage:images.mainPageTopAdImage,
    date:"2023-06-27",
    comment: "user2 comment",
    prefer:"10",
  },
  user3:{
    id:"3user3user",
    profile: images.github,
    score: "만족",
    workImage:images.mainPageTopAdImage,
    date:"2023-06-28",
    comment: "user3 comment",
    prefer:"8",
  },
};

const PortfolioView: React.FC = () => {
  //현재 페이지 정보
  const [portfolioId, setPortfolioId] = useState(1);
  const [cookies, setCookie, removeCookie] = useCookies(["userId", "accessToken", "refreshToken"])
  //사용자 기본 정보 관련 state
  const [name, setName] = useState("undefined");
  const [age, setAge] = useState<number>(0);
  const [collage, setCollage] = useState("undefined");
  const [departure, setDeparture] = useState("undefined");
  const [profileImage, setProfileImage]:any = useState(images.noneProfile);
  const [modalActive, setModalActive] = useState<boolean>(false)

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
  const [viewOption, setViewOption] = useState({
    "work":true,
    "comment":false,
    "review":false,
  })
  // 서버에서 사용자 기본 정보를 받아와서 반영하는 effect
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/users/${cookies.userId}/`)
    .then((res)=>{
      const userData = res.data;
      console.log(userData)
      if(userData.name) setName(()=>userData.name);
      if(userData.birth_date){
        const current = new Date().getFullYear() as number;
        const birth = new Date(userData.birth_date).getFullYear() as number;
        setAge(()=>(current-birth + 1));
      }
      if(userData.univ) setCollage(()=>userData.univ);
      if(userData.major) setDeparture(()=>userData.major);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  // 서버에서 사용자 기술 스택 받아와서 반영하는 effect
  useEffect(() => {
    const initialStack: any = [];
    //get Data : dataList
    const skillStack: string[] = [
      "Spring",
      "django",
      "Java",
      "React",
      "Algorithm",
    ];
    const dataList: number[] = [40, 50, 60, 30, 80];
    for (let i = 0; i < dataList.length; i++) {
      initialStack.push(
        <div style={styles.stackBox}>
          <p style={styles.stackName}>{skillStack[i]}</p>
          <div style={styles.proficiencyBox}>
            <div style={{...styles.proficiency, width: `${dataList[i]}%` }}>
              &nbsp;
            </div>
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
  //profileDetailLeftMenu에서 활성화할 요소 선택
  const activeMenu = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    const id = e.currentTarget.id;
    setViewOption((prev: typeof viewOption)=>({
      ...prev,
      "work":false,
      "comment":false,
      "review":false,
    }))
    setViewOption((prev: typeof viewOption)=>({
      ...prev, [id]: true,
    }))
  }
  //외주 관리하기 클릭 시 현재 사용자의 외주 등록 여부에 따라 다른 창으로 이동하도록 함
  const manageOutsourcingEvent = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    if(CurrentUserInfo.haveOutsourcing === true){
      console.log("have oustourcing")
    }else{
      setModalActive(true)
      console.log("dont have outsourcing")
    }
  }

  const setModalEvent = (e:any)=>{
    const target = e.target as HTMLElement;
    if(target.id === 'modal'){
      setModalActive(false)
    }
  }

  const closeModal = (props:boolean)=>{
    setModalActive(props);
  }

  return (
    <div style={styles.page}>
      <TopBar />
      {modalActive &&
        <div style={styles.modalBackground} onClick={setModalEvent} id='modal'>
          <VerificationModal closeModal={closeModal}/>
        </div>
      }
      <PortfolioViewTimeline viewList={viewList} />
      <div style={styles.portfolioDetail}>
        <PortfolioViewProfile props={{
          profileImage:profileImage,
          name:name,
          age:age,
          collage:collage,
          departure:departure,
          viewList:viewList,
          stacks:stacks,
        }}/>
        <div style={styles.portfolioDetailLeft}>
          <div style={styles.portfolioDetailLeftMenu}>
            <button style={viewOption.work?{...styles.menuButton,color:"black",}:{...styles.menuButton,color:"grey",}} id="work" onClick={activeMenu}>작업물</button>
            <button style={viewOption.comment?{...styles.menuButton,color:"black",}:{...styles.menuButton,color:"grey",}} id="comment" onClick={activeMenu}>댓글</button>
            <button style={viewOption.review?{...styles.menuButton,color:"black",}:{...styles.menuButton,color:"grey",}} id="review" onClick={activeMenu}>외주후기</button>
          </div>
          {viewOption.work &&
            <PortfolioViewContent props={{
              profileImage:profileImage,
              name:name,
              age:age,
              collage:collage,
              departure:departure,
              viewList:viewList,
              stacks:stacks,
            }} 
            checkViewListEvent={checkViewListEvent} manageOutsourcingEvent={manageOutsourcingEvent}/>
          }
          {viewOption.comment && 
            <PortfolioViewUserComment userComment={userComment}/>
          }
          {viewOption.review &&
            <PortfolioViewReview userReview={userReview}/>
          }
        </div>
      </div>
    </div>
  );
};

export default PortfolioView;
