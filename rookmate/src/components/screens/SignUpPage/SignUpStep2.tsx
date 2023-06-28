import React, {useState, useEffect} from 'react';
import {images} from '../../../assets/images/images';
import './SignUp.css'

interface Styles{
  signupForm:React.CSSProperties;
  inputBoxContainer:React.CSSProperties;
  inputBox:React.CSSProperties;
  inputBoxSmall:React.CSSProperties;
  inputBoxMiddle:React.CSSProperties;
  inputBoxMiddleInputPart:React.CSSProperties;
  submitButton:React.CSSProperties;
}

const styles:Styles = {
  signupForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.3rem",

    width:"100vw",
    height: "100vh",
  },
  inputBoxContainer:{
    display:"flex",
    columnGap:"1.2rem",
    
    width:"33%",
  },
  inputBox:{
    width:"33",
    height:"3rem",

    borderRadius:"0.7rem",
    border:"1px solid #000",
    paddingLeft:"0.8rem",
  },
  inputBoxSmall:{
    display:"flex",
    alignItems:"center",

    width:"50%",

    border:"0.1rem solid #000",
    borderRadius:"0.8rem",
  },
  inputBoxMiddle:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",

    width:"33%",

    border:"0.1rem solid #000",
    borderRadius:"0.8rem",
  },
  inputBoxMiddleInputPart:{
    width:"80%",

    border:"none",
    outline:"none",
  },
  submitButton:{
    width:"33%",
    height:"3rem",

    borderRadius:"0.7rem",
    border:"none",

    backgroundColor:"#7FA3C5",

    fontSize:"1.5rem",
    fontWeight:"900",
    color:"#fff",
  },
}

const SignUp = ()=>{
  return(
    <form style={styles.signupForm}>
      <p style={{fontSize:"2rem", fontWeight:"700",}}>필수정보 입력</p>
      <div style={styles.inputBoxContainer}>
        <label htmlFor='name' style={styles.inputBoxSmall}>
          <p style={{width:"20%",fontSize:"1rem",marginLeft:"0.8rem",}}>이름 : </p>
          <input type="text" id='name' style={{width:"80%", height:"95%", border:"none", outline:"none",marginRight:"0.8rem",fontSize:"1rem",}}/>
        </label>
        <label htmlFor='birth' style={styles.inputBoxSmall}>
          <p style={{width:"35%",fontSize:"1rem",marginLeft:"0.8rem",}}>생년월일 : </p>
          <input type="text" id='birth' style={{width:"65%", height:"95%", border:"none", outline:"none",marginRight:"0.8rem", }}  placeholder='YYYY-MM-DD'/>
        </label>
      </div>
      <label htmlFor='phoneNumber' style={styles.inputBoxMiddle}>
        <p>핸드폰 : </p>
        <input type='text' id='phoneNumber' style={styles.inputBoxMiddleInputPart}/>
      </label>
      <label htmlFor='major' style={styles.inputBoxMiddle}>
        <p>관심분야 : </p>
        <input type='text' id='major' style={styles.inputBoxMiddleInputPart}/>
      </label>
      <label htmlFor='job' style={styles.inputBoxMiddle}>
        <p>직업 : </p>
        <input type='text' id='job' style={styles.inputBoxMiddleInputPart}/>
      </label>
      <button  style={styles.submitButton}>회원가입</button>
    </form>
  )
}

export default SignUp;