import React, { useState, useEffect, MouseEventHandler } from "react";
import { images } from "../../../../assets/images/images";

type PortfolioViewContentType = {
  props:{
    profileImage:string,
    name:string,
    age:string,
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
}

interface Styles{
  contentPage:React.CSSProperties;
  workList:React.CSSProperties;
  addSomething:React.CSSProperties;
  outsourcingManageButton:React.CSSProperties;
}

const styles:Styles = {
  contentPage:{
    width: "100%",
    fontFamily: 'TheJamsil5Bold',
  },
  workList:{
    display: "flex",
    flexWrap: "wrap",

    width: "100%",
    height: "66.7%",
  },
  addSomething:{
    width: "19rem",
    height: "19rem",
  },
  outsourcingManageButton:{
    position: "fixed",
    bottom: "5%",
    left: "93%",

    zIndex: "3",

    width: "5.1rem",
    height: "5.1rem",

    backgroundColor: "white",
    border: "none",
  },
};

const PortfolioViewContent:React.FC<PortfolioViewContentType> = ({props, checkViewListEvent})=>{
  const handleToolButtonClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    checkViewListEvent(e)
  }

  return(
    <div style={styles.contentPage}>
      <div style={styles.workList}>
        <img src={images.addSomething} style={styles.addSomething} alt='addSomething'/>
      </div>
      <button style={styles.outsourcingManageButton}>
        <img src={images.outsourcingManage} style={{width:"100%", height:"100%",}} alt='outsourcingManageButton'/>
      </button>
    </div>
  )
}

export default PortfolioViewContent;