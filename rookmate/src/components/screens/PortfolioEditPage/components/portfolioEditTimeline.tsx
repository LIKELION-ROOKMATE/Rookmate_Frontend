import React, { useState, useEffect } from "react";
import { images } from "../../../../assets/images/images";

type PortfolioEditTimelineType = {
  viewList:{
    stack: boolean,
    timeline: boolean,
    license: boolean,
    sns: boolean,
    competition: boolean,
  },
}

interface Styles{
  DisplayNone:React.CSSProperties,
  ImgTimelineBox:React.CSSProperties,
  mainImg:React.CSSProperties,
  timeline:React.CSSProperties,
  timelineElement:React.CSSProperties,
  point:React.CSSProperties,
  title:React.CSSProperties,
  content:React.CSSProperties,
}

const styles:Styles = {
  DisplayNone: {
    display: "none",
  },
  ImgTimelineBox:{
    position: "relative",
    backgroundColor: "#000000",

    width: "100%",
    height: "19%",
  },
  mainImg:{
    opacity: "0.3",

    width: "100%",
    height: "100%",
  },
  timeline:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: "50%",

    width: "100%",
    height: "3px",

    backgroundColor: "#ffffff",
  },
  timelineElement:{
    position: "relative",
    top:"5.5rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    rowGap: "0.6rem",
    flexGrow: "1",  

    height: "12.5rem",

    fontSize: "0.7rem",
  },
  point:{
    width: "1.5rem",
    height: "1.5rem",

    borderRadius: "20px",

    backgroundColor: "#ffffff",

    color: "#ffffff",
  },
  title:{
  color: "#ffffff",
  },
  content:{
  color: "#ffffff",
  }
};

const PortfolioEditTimeline:React.FC<PortfolioEditTimelineType> = ({viewList})=>{

  return(
    <div>
      <div style={styles.ImgTimelineBox}>
        <img
          src={images.portfolioMainImage}
          alt="main-img"
          style={styles.mainImg}
        />
        <div
          style={viewList.timeline ? styles.timeline : styles.DisplayNone}
        >
          <div style={styles.timelineElement}>
            <p style={styles.point}></p>
            <p style={styles.title}>rookmate</p>
            <p style={styles.content}>기록을 적어주세요. 최대 20자</p>
          </div>
          <div style={styles.timelineElement}>
            <p style={styles.point}></p>
            <p style={styles.title}>rookmate</p>
            <p style={styles.content}>기록을 적어주세요. 최대 20자</p>
          </div>
          <div style={styles.timelineElement}>
            <p style={styles.point}></p>
            <p style={styles.title}>rookmate</p>
            <p style={styles.content}>기록을 적어주세요. 최대 20자</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default PortfolioEditTimeline

