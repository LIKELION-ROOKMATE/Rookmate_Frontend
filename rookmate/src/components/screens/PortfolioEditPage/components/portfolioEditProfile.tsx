import React, { useState } from "react";
import { images } from "../../../../assets/images/images";

type PortfolioEditProfileType = {
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
    setInputStack:any,
    setSnsId:any,
  }
  setProfileImage:any,
}

const styles:{[key:string]:React.CSSProperties} = {
  displayNone: {
    display: "none",
  },
  profile:{
    width: "22rem",
    height: "100%",

    padding: "0 0 0 2rem",
    
    fontSize: "0.87rem",
    fontWeight: "500",
  },
  profileImage:{
      width: "80%",
  },
  userInfo:{
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",

    backgroundColor: "rgb(255, 255, 255)",

    margin: "1rem 0 1rem 0",
  },
  divisorLine:{
    backgroundColor: "#7FA3C5",
    
    width: "90%",
    height: "3px",
  },
  stackBox:{
    display: "flex",
    flexDirection: "row",

    width: "100%",

    fontSize: "1rem",
  },
  title:{
    marginTop: "1rem",
    marginBottom: "1rem",

    fontSize: "1rem",
    fontWeight: "600",
  },
  sns:{

  },
  snsList:{
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    rowGap: "1.2rem",

    width: "100%",

    marginBottom: "1rem",
  },
  snsElement:{
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",

    width: "50%",
  },
  snsImage:{
    width: "1.4rem",
    height: "1.4rem",
  },
  snsId:{
    display: "flex",
    alignItems: "end",

    fontSize: "0.75rem",
    paddingLeft:"1rem",
  },
};

const PortfolioEditProfile:React.FC<PortfolioEditProfileType> = ({props, setProfileImage})=>{
  const changeProfileImageEvent = (e:any) =>{
    const inputFile = e.target.files[0];
    if(inputFile){
      const reader = new FileReader();
      reader.onload = (e:any) =>{
        const inputFileURL = e.target.result;
        setProfileImage(inputFileURL)
      }
      reader.readAsDataURL(inputFile)
    }
  }

  const handleSnsId = (e:any)=>{
    const target = e.target;
    const id = target.id;
    const value = target.value;
    props.setSnsId((prev:any)=>({...prev, [id]:value}))
  }

  return(
    <div style={styles.profile}>
      <p style={styles.title}>프로필</p>
      <label htmlFor='profileImage' style={{cursor:"pointer"}}>
        <input type="file" onChange={changeProfileImageEvent} id='profileImage' style={{display:"none"}}/>
        <img src={props.profileImage} alt='profileImage' style={styles.profileImage}/>
      </label>

      <div style={styles.userInfo}>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Collage : {props.collage}</p>
        <p>Departure : {props.departure}</p>
      </div>
      <div style={styles.divisorLine}></div>

      <div
        style={props.viewList.stack ? {} : styles.displayNone}
      >
        <p style={styles.title}>스택</p>
        {props.stacks}
      </div>
      <div style={styles.divisorLine}></div>

      <div style={props.viewList.sns?styles.sns:styles.displayNone}>
        <div style={styles.title}>SNS</div>
        <div style={styles.snsList}>
          <div style={styles.snsElement}>
            <img src={images.instagram} alt='instagram'/>
            <input style={styles.snsId} placeholder='id : ' id='instagram' onChange={handleSnsId}/>
          </div>
          <div style={styles.snsElement}>
            <img src={images.github} alt='github'/>
            <input style={styles.snsId} placeholder='id : ' id='github' onChange={handleSnsId}/>
          </div>
          <div style={styles.snsElement}>
            <img src={images.facebook} alt='facebook'/>
            <input style={styles.snsId} placeholder='id : ' id='twitter' onChange={handleSnsId}/>
          </div>
        </div>
      </div>
      <div style={styles.divisorLine}></div>
    </div>
  )
}

export default PortfolioEditProfile;