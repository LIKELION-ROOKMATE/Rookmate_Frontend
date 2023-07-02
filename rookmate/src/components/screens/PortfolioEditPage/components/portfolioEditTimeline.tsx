  import React, { useState } from "react";
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
    displayNone:React.CSSProperties,
    imgTimelineBox:React.CSSProperties,
    mainImg:React.CSSProperties,
    editButtonBox:React.CSSProperties,
    editButton:React.CSSProperties,
    timeline:React.CSSProperties,
    timelineElement:React.CSSProperties,
    point:React.CSSProperties,
    titleContent:React.CSSProperties,
    title:React.CSSProperties,
    content:React.CSSProperties,
  }

  const styles:Styles = {
    displayNone: {
      display: "none",
    },
    imgTimelineBox:{
      position: "relative",
      backgroundColor: "#000000",

      width: "100%",
      maxWidth: "95rem",
      height: "19%",
      minHeight:"12rem",
    },
    mainImg:{
      opacity: "0.3",
      width: "100%",
      height: "12rem",
    },
    editButtonBox:{
      display: "flex",
      gap: "0.6rem",
      position: "absolute",
      left: "80%",
      bottom: "75%",
      zIndex:"2",
    },
    editButton:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",

      width: "8.5rem",
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
      top: "1.8rem",

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
    titleContent:{
      display:"flex",
      flexDirection:"column",
      rowGap:"0.6rem",
    },
    title:{
      color: "#000",
      textAlign:"center",
    },
    content:{
      color: "#000",
      textAlign:"center",
    }
  };

  const PortfolioViewTimeline:React.FC<PortfolioViewTimelineType> = ({viewList})=>{
    const [mainImage, setMainImage] = useState(images.portfolioMainImage)

    const [timelineElement, setTimelineElement] = useState<JSX.Element[]>([
      <div style={styles.timelineElement}>
        <div style={styles.point}></div>
        <div style={styles.titleContent}>
          <input style={styles.title} placeholder='제목'/>
          <input style={styles.content} placeholder='내용 : 최대 20자'/>
        </div>
      </div>
    ])

    const timelineAddEvent = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
      e.preventDefault();
      setTimelineElement((prev:any) =>[ ...prev, 
        <div style={styles.timelineElement}>
          <div style={styles.point}></div>
          <div style={styles.titleContent}>
            <input style={styles.title} placeholder='제목'/>
            <input style={styles.content} placeholder='내용 : 최대 20자'/>
          </div>
        </div>
      ])
    }

    const addMainImageEvent = (e:any)=>{
      const imageFile = e.target.files[0];
      if(imageFile){
        const reader = new FileReader()
        reader.onload = (e:any)=>{
          const imageFileURL = e.target.result;
          setMainImage(imageFileURL)
        }
        reader.readAsDataURL(imageFile)
      }
    }
    
    return(
      <div>
        <div style={styles.imgTimelineBox}>
          <img
            src={mainImage}
            alt="main-img"
            style={styles.mainImg}
          />
          <div style={styles.editButtonBox}>
            <input type='file' style={{display:"none",}} id="mainImage" onChange={addMainImageEvent}/>
            <label style={styles.editButton} htmlFor='mainImage'>대표이미지 설정</label>
            <button style={styles.editButton} onClick={timelineAddEvent}>타임라인 추가</button>
          </div>
          <div style={viewList.timeline ? styles.timeline : styles.displayNone}>
            {timelineElement}
          </div>
        </div>
      </div>
    )
  }

  export default PortfolioViewTimeline

