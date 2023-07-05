import React from 'react';
import { images } from "../../../../assets/images/images";

interface Styles{
  outsourcingInfoRoot:React.CSSProperties;
  backNavigator:React.CSSProperties;
  outsourcingInfoBox:React.CSSProperties;
  outsourcingInfo:React.CSSProperties;
  title:React.CSSProperties;
  profile:React.CSSProperties;
  content:React.CSSProperties;
  contentHead:React.CSSProperties;
  userInfo:React.CSSProperties;
  name:React.CSSProperties;
  organization:React.CSSProperties;
  tools:React.CSSProperties;
  toolsImage:React.CSSProperties;
  field:React.CSSProperties;
  explain:React.CSSProperties;
  outsourcingImg:React.CSSProperties;
  workImage:React.CSSProperties;
  mainImgBox:React.CSSProperties;
  subImageBox:React.CSSProperties;
  subImage:React.CSSProperties;
}

const styles:Styles = {
  outsourcingInfoRoot:{
    margin : "6rem 13.5rem 0 13.5rem",
  },
  backNavigator:{
    width: "1.2rem",
    height: "2.1rem",
    marginBottom: "2.25rem",
  },
  outsourcingInfoBox:{
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    width: "62rem",
    height: "31rem",
  },
  outsourcingInfo:{
    display: "flex",
    flexWrap: "wrap",
    width: "48%",
    marginRight: "3rem",
  },
  title:{
    display: "flex",
    width: "100%",
    height: "3.3rem",
    color: "#000",
    fontSize: "1.6rem",
    fontWeight: "600",
  },
  profile:{
    width: "3rem",
    height: "3rem",
    marginRight: "1.1rem",
    padding: "0px",
  },
  content:{
    display: "flex",
    flexDirection: "column",
    rowGap: "0.3rem",
    color: "#000",
    fontSize: "0.75rem",
    lineHeight: "1.25rem",
  },
  contentHead:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfo:{
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",
  },
  name:{
    color: "#000",
    fontSize: "1.125rem",
    fontFamily: "Inter",
    fontWeight: "600",
  },
  organization:{

  },
  tools:{
    display: "flex",
    gap: "0.5rem",
  },
  toolsImage:{
    width: "1.5rem",
    height: "1.5rem",
  },
  field:{

  },
  explain:{

  },
  outsourcingImg:{
    display: "flex",
    flexDirection: "row",
    gap: "1.81rem",
    width: "52%",
  },
  workImage:{
    width: "100%",
    height: "100%",
    borderRadius: "30px",
  },
  mainImgBox:{
    width: "20rem",
    height: "31rem",
  },
  subImageBox:{
    width: "10rem",
    height: "30rem",
  },
  subImage:{
    width: "10rem",
    height: "9.1rem",
    marginBottom: "1.81rem",
  },
}

const OustsourcingInfo:React.FC = ()=>{
  return(
    <div style={styles.outsourcingInfoRoot}>
      <a><img src={images.leftPoint}  style={styles.backNavigator} alt='back'/></a>
      <div style={styles.outsourcingInfoBox}>
        <div style={styles.outsourcingInfo}>
          <p style={styles.title}>시디학생의  로고디자인.타이포그래피</p>
          <div style={styles.title}>
            <img src={images.profile} style={styles.profile} alt='profile'/>
            <div style={styles.content}>
              <div style={styles.contentHead}>
                <div style={styles.userInfo}>
                  <div style={styles.name}>홍길동</div>
                  <div style={styles.organization}>국민대학교/시각디자인학과</div>
                </div>
                <div style={styles.tools}>
                  <img src={images.share} style={styles.toolsImage} alt='share'/>
                  <img src={images.mail} style={styles.toolsImage} alt='mail'/>
                  <img src={images.bookMark} style={styles.toolsImage} alt='bookMark'/>
                  <img src={images.thumbsUp} style={styles.toolsImage} alt='thumbsUp'/>
                </div>
              </div>
              <div style={styles.field}>시각디자인</div>
              <div style={styles.explain}>
                로고디자인 기깔나게 해드립니다.
                한가로운 날씨에 신나게 노래를 부르며, 꽃들과 함께 향기로운 산책을 즐길 수 있는 아름다운 공원에서 시간을 보내는 것은 참으로 행복한 일이다.
                바람은 부드럽게 불어오고, 새들은 활짝 날개를 펴고 우리를 맞이한다.
                푸른 잔디밭 위에는 사람들이 자리를 마련하고, 웃음소리와 함께 웅장한 피크닉이 열린다.
                어린이들은 기뻐서 놀라운 모험을 즐기며 뛰어다니고, 어른들은 휴식과 평온을 찾는다.
                이 공원은 자연과 인간의 조화로운 만남의 장소로, 일상의 스트레스를 잊고 여유로운 시간을 누릴 수 있는 특별한 곳이다.
              </div>
            </div>
          </div>
        </div>

        <div style={styles.outsourcingImg}>
          <div style={styles.mainImgBox}>
            <img src={images.portfolioMainImage} style={styles.workImage} alt='mainImage'/>
          </div>
          <div style={styles.subImageBox}>
            <div style={styles.subImage}>
              <img src={images.mainPageTopAdImage} style={styles.workImage} alt='subImage'/>
            </div>
            <div style={styles.subImage}>
              <img src={images.mainPageTopAdImage} style={styles.workImage} alt='subImage'/>
            </div>
            <div style={styles.subImage}>
              <img src={images.mainPageTopAdImage} style={styles.workImage} alt='subImage'/>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OustsourcingInfo