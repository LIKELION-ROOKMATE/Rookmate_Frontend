  import React, { useState, useEffect } from "react";
  import { images } from "../../../../assets/images/images";

  type PortfolioViewTimelineType = {
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
    editButtonBox:React.CSSProperties,
    editButton:React.CSSProperties,
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
      maxWidth: "95rem",
      height: "19%",
    },
    mainImg:{
      opacity: "0.3",

      width: "100%",
      height: "100%",
    },
    editButtonBox:{
      display: "flex",
      gap: "0.6rem",
      position: "absolute",
      left: "84%",
      bottom: "72%",
    },
    editButton:{
      width: "6.625rem",
      height: "2rem",

      backgroundColor: "transparent",

      borderRadius: "6rem",
      border: "0.1rem solid #fff",

      fontSize: "0.75rem",
      fontWeight:"500",
      color:"#fff",

      cursor:"pointer",
    },
    timeline:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      position: "absolute",
      top: "50%",

      width: "100%",
      height: "3px",

      borderTop: "3px thick #fff",
      border: "3px thick #fff",
      // backgroundColor: "rgba(0,0,0,0)",
      backgroundColor: "white",

      zIndex: "1", // 추가된 부분
    },
    timelineElement:{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      flexDirection: "column",
      rowGap: "0.6rem",
      flexGrow: "1",

      position:"relative",
      top: "1.3rem",

      //height: "50%",

      fontSize: "0.7rem",
    },
    point: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

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

  const PortfolioViewTimeline:React.FC<PortfolioViewTimelineType> = ({viewList})=>{

    return(
      <div>
        <div style={styles.ImgTimelineBox}>
          <img
            src={images.portfolioMainImage}
            alt="main-img"
            style={styles.mainImg}
          />
          <div style={styles.editButtonBox}>
            <button style={styles.editButton}>방문통계</button>
            <button style={styles.editButton}>정보수정</button>
          </div>
          <div style={viewList.timeline ? styles.timeline : styles.DisplayNone}>
            <div style={styles.timelineElement}>
              <div style={styles.point}></div>
              <p style={styles.title}>rookmate</p>
              <p style={styles.content}>기록을 적어주세요. 최대 20자</p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }

  export default PortfolioViewTimeline

