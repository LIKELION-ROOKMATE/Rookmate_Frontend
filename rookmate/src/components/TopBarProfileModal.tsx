import React, {useState, useEffect} from "react";
import { removeCookie } from '../utils/cookie';
import { useLocation, useNavigate } from 'react-router-dom';

type modalType = {
  setViewProfileModal:any,  
  removeCookie:any,
}

const styles:{[key:string]:React.CSSProperties}={
  background:{
    position:"absolute",
    top:"3.5rem",
    right:"1.8rem",
    display:"flex",
    flexDirection:"column",
    width:"13rem",
    borderRadius: "1.875rem",
    padding:"1rem 0 1rem 0",
    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor:"#fff",
    zIndex:"2",
  },
  profileModalTool:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",

    width:"100%",
    height:"3.6rem",

    margin:"0.5rem 0 0.5rem 0",
    cursor:"pointer",
  },
}

const TopBarProfileModal:React.FC<modalType> = ({setViewProfileModal, removeCookie})=>{
  const navigate = useNavigate();
  const handleLogOut=()=>{
    removeCookie("accessToken", {path:"/"});
    removeCookie("userId", {path:"/"});
    removeCookie("refreshToken", {path:"/"});
    removeCookie("portfolioId", {path:"/"});
    navigate("/");
  }
  return(
    <div style={styles.background}>
      <span style={styles.profileModalTool}>북마크</span>
      <span style={styles.profileModalTool}>내 정보</span>
      <span style={styles.profileModalTool} onClick={handleLogOut}>로그아웃</span>
    </div>
  )
}

export default TopBarProfileModal;