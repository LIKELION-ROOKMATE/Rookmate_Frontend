import React, { useState, useEffect } from "react";
import { images } from "../../../../assets/images/images";

interface Styles{
  modalContainer:React.CSSProperties,
  modalMainTxt:React.CSSProperties,
  modalSubTxt:React.CSSProperties,
  registerOutsourcingButton:React.CSSProperties,
}

const styles:Styles={
  modalContainer:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

    width: "35rem",
    height:"41rem",

    backgroundColor:"#fff",
    borderRadius:"2rem",
  },
  modalMainTxt:{
    width:"24.5rem",

    marginBottom:"1.5rem",

    fontSize:"1.55rem",
    fontWeight:"600",
    textAlign:"center",
  },
  modalSubTxt:{
    width:"24.5rem",

    marginBottom:"5.44rem",

    fontSize:"1.22rem",
    textAlign:"center",
  },
  registerOutsourcingButton:{
    width:"24.2rem",
    height:"6rem",

    border:"none",
    borderRadius:"1.3rem",

    fontSize:"1.75rem",
    fontWeight:"700",
    color:"#fff",
  },
}

const StartOutsourcingModal = ()=>{
  const normalColor = "#7FA3C5"
  const hoverColor = "#5B98D3"
  const [hover, setHover] = useState(false)

  return(
    <div style={styles.modalContainer}>
      <img src={images.bigLogo} style={{width:"14.5rem", height:"14.5rem",}} alt='logo'/>
      <p style={styles.modalMainTxt}>쉽고 빠르게 외주를 시작해보세요!</p>
      <p style={styles.modalSubTxt}>게시한 작업물들을 통해서 외주를 홍보하고, 고객들과 거래를 진행해보세요.</p>
      <button style={hover?{...styles.registerOutsourcingButton,backgroundColor:hoverColor,cursor:"pointer",}:{...styles.registerOutsourcingButton,backgroundColor:normalColor,}}
        onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}
      >외주 등록하기
      </button>
    </div>
  )
}

export default StartOutsourcingModal;