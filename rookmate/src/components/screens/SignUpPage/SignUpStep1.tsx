import React, {useState, useEffect} from 'react';
import {images} from '../../../assets/images/images';
import './SignUp.css'

interface Styles{
  signupForm:React.CSSProperties;
  inputBox:React.CSSProperties;
  toolBox:React.CSSProperties;
  submitButton:React.CSSProperties;
}

const styles:Styles = {
  signupForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.8rem",
    height: "100vh",
  },
  inputBox:{
    width:"30%",
    height:"3rem",

    borderRadius:"0.7rem",
    border:"1px solid #000",
    paddingLeft:"0.8rem",
  },
  toolBox:{
    display:"flex",
    justifyContent:"start",

    width:"31%",
  },
  submitButton:{
    width:"31%",
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
    <form style={styles.signupForm} action='/signup/2'>
      <p style={{fontSize:"2rem", fontWeight:"700",}}>이메일로 시작하기</p>
      <input type='text' placeholder='이메일 : ' style={styles.inputBox}/>
      <input type='password' placeholder='비밀번호 : ' style={styles.inputBox}/>
      <input type='password' placeholder='비밀번호 재입력 : ' style={styles.inputBox}/>
      <button  style={styles.submitButton}>회원가입</button>
    </form>
  )
}

export default SignUp;