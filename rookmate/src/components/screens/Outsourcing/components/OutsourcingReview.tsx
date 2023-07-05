import React, {useState, useEffect} from 'react';
import { images } from "../../../../assets/images/images";
import { relative } from 'path';

interface Styles{
  rootBox:React.CSSProperties,
  reviewHead:React.CSSProperties,
  title:React.CSSProperties,
  totalReview:React.CSSProperties,
  divisor:React.CSSProperties,
  reviewBox:React.CSSProperties,
  profileImage:React.CSSProperties,
  reviewInfo:React.CSSProperties,
  userIdName:React.CSSProperties,
  reviewScore:React.CSSProperties,
  content:React.CSSProperties,
  reviewImage:React.CSSProperties,
  reviewTools:React.CSSProperties,
  workOptions:React.CSSProperties,
}

const styles:Styles = {
  rootBox:{
    marginLeft: "13.7rem",
    width: "58rem",
  },
  reviewHead:{
    display: "flex",
    flexDirection:"row",
    columnGap: "1rem",

    marginBottom: "2.5rem",
  },
  title:{
    color: "#000",
    fontSize: "1.125rem",
    fontWeight: "700",
  },
  totalReview:{
    color: "#000",
    fontSize: "0.75rem",
  },
  reviewBox:{
    display: "flex",
    flexDirection:"row",

    marginBottom: "1.3rem",
    marginTop: "0.5rem",
  },
  profileImage:{
    width: "3.14rem",
    height: "3.14rem",

    marginRight: "0.8rem",
  },
  reviewInfo:{
    display: "flex",
    flexDirection:"column",
    rowGap: "0.4rem",

    width: "50%",
  },
  userIdName:{
    color: "#000",
    fontSize: "1rem",
  },
  reviewScore:{
    fontSize:"1rem",
  },
  content:{
    width: "27.3rem",
    height: "3rem",
  },
  reviewImage:{
    width:"7.4rem",
    height:"7.4rem",
  },

  reviewTools:{
    display:"flex",
    flexDirection:"column",
    alignItems:"end",

    width:"45%",
  },
  workOptions:{
    display:"flex",
    justifyContent:"end",

    marginBottom:"0.33rem",

    fontSize: "0.875rem",
    color:"#373737",
  },
  divisor:{
    width: "100%",
    height: "3px",
    backgroundColor: "#000",
  },
}

const data:any = {
  user1:{
    id: "userId1",
    content: "content1",
    score: 5,
    profileImage: images.profile,
    reviewImage: images.mainPageTopAdImage,
  },
  user2:{
    id: "userId2",
    content: "content2",
    score: 4,
    profileImage: images.profile,
    reviewImage: images.mainPageTopAdImage,
  },
  user3:{
    id: "userId3",
    content: "content3",
    score: 3,
    profileImage: images.profile,
    reviewImage: images.mainPageTopAdImage,
  }
}

const OutsourcingReview = ()=>{
  const [avgScore, setAvgScore] = useState("")
  const [review, setReview] = useState([])

  useEffect( ()=>{
    let userReviewList:any = []
    let total = 0, cnt=0, avg=0
    for(let e in data){
      const userData = data[e];
      const score = userData["score"]
      let reviewScore = ""

      total += score
      cnt+=1
      for(let i=0; i<5; i++){
        if(score > i) reviewScore += "★ "
        else if(score <= i) reviewScore += "☆ "
      }
      userReviewList.push(
      <div>
        <div style={styles.reviewBox}>
          <img src={userData["profileImage"]} style={styles.profileImage} alt='profileImage'/>
          <div style={styles.reviewInfo}>
            <div>{e}({userData["id"]})</div>
            <div>{reviewScore}</div>
            <div>{userData["content"]}</div>
            <img src={userData["reviewImage"]} style={styles.reviewImage} alt='reviewImage'/>
          </div>
          <div style={styles.reviewTools}>
            <img src={images.greyMail} style={{width:"1.8rem", height:"1.5rem",marginBottom:"1.12rem",}}/>
            <p style={styles.workOptions}>원본 파일 제공해요</p>
            <p style={styles.workOptions}>상업적 이용 가능해요</p>
            <p style={styles.workOptions}>2차 가공 가능해요</p>
          </div>
        </div>
        <div style={styles.divisor}/>
      </div>
      )
    }
    cnt>0?avg=(total/cnt):avg=(0)
    let avgScoreTmp = ""
    for(let i=0; i<5; i++){
      if(avg > i) avgScoreTmp += "★ "
      else if(avg <= i) avgScoreTmp += "☆ "
    }
    setAvgScore(avgScoreTmp)
    setReview(userReviewList)
  }, [])

  return(
    <div style={styles.rootBox}>
      <div style={styles.reviewHead}>
        <div style={styles.title}>외주후기</div>
        <div>평균 {avgScore}</div>
        <div style={styles.totalReview}>{Object.keys(data).length}개의 후기</div>
      </div>
      <div>
        {review}
      </div>
    </div>
  )
}

export default OutsourcingReview