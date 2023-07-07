import React, { useState, useEffect, MouseEventHandler } from "react";
import { images } from "../../../../assets/images/images";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type PortfolioViewContentType = {
  props:{
    profileImage:string,
    name:string,
    age:number,
    collage:string,
    departure:string,
    viewList:{
      stack: boolean,
      timeline: boolean,
      license: boolean,
      sns: boolean,
      competition: boolean,
    },
    stacks:any,
  },
  checkViewListEvent: (e: React.MouseEvent<HTMLButtonElement>)=>void;
  manageOutsourcingEvent : (e: React.MouseEvent<HTMLButtonElement>)=>void;
}

const styles:{[key:string]:React.CSSProperties} = {
  contentPage:{
    width: "100%",
    height:"85%",
  },
  workList:{
    display: "flex",
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"center",
    width: "100%",
    height:"50%",
  },
  workBox:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:"50%",
    height:"30%",
  },
  addSomething:{
    height:"100%",
    objectFit: "cover",
  },
  outsourcingManageButton:{
    position: "fixed",
    bottom: "5%",
    left: "93%",
    zIndex: "3",
    width: "5.1rem",
    height: "5.1rem",
    backgroundColor: "#7FA3C5",
    border: "none",
    borderRadius:"100rem",
  },
};

const PortfolioViewContent:React.FC<PortfolioViewContentType> = ({props, checkViewListEvent, manageOutsourcingEvent})=>{
  const [cookies, setCookie, removeCookie] = useCookies(["userId", "accessToken", "refreshToken", "portfolioId"])
  const [workElementList, setWorkElementList] = useState<JSX.Element[]>([])
  const navigate = useNavigate();
  const handleToolButtonClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    checkViewListEvent(e)
  }

  useEffect(()=>{
    setWorkElementList(()=>[])
    axios.get(`http://127.0.0.1:8000/portfolios/${cookies.portfolioId}/works/`)
    .then((res)=>{
      const imageData = res.data;
      for(let element in imageData){
        const src = imageData[element].images[0].image;
        console.log(src);
        setWorkElementList((prev)=>[...prev, 
          <div style={styles.workBox}>
            <img src={`http://127.0.0.1:8000${src}`} style={styles.addSomething} alt='work'/>
          </div>
        ])
      }
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  const handleManageOutsourcingButtonClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    axios.get(`http://127.0.0.1:8000/users/${cookies.userId}/`)
    .then((res)=>{
      if(!res.data.univ || !res.data.univ_email || !res.data.major) manageOutsourcingEvent(e)
      else navigate("/outsourcing/recruitment")
    })
  }
  return(
    <div style={styles.contentPage}>
      <div style={styles.workList}>
        {workElementList}
      </div>
      <button style={styles.outsourcingManageButton} onClick={handleManageOutsourcingButtonClick}>
        <img src={images.outsourcingManage} style={{width:"40%", height:"40%",}}/>
        <p style={{fontSize:"0.5rem", color:"#fff",}}>외주관리하기</p>
      </button>
    </div>
  )
}

export default PortfolioViewContent;