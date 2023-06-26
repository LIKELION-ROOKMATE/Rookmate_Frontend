import React, { useState, useEffect, MouseEventHandler } from "react";
import { images } from "../../../../assets/images/images";

type PortfolioViewUserCommentType = {
  userComment: any,
}

interface Styles{
  userCommentRoot:React.CSSProperties,
  sortOption:React.CSSProperties,
  optionName:React.CSSProperties,
  userCommentBox:React.CSSProperties,
  userProfile:React.CSSProperties,
  userComment:React.CSSProperties,
  rowDirection:React.CSSProperties,
  CommentHead:React.CSSProperties,
  mailToolImg:React.CSSProperties,
  preferToolImg:React.CSSProperties,
  preferTool:React.CSSProperties,
}

const styles:Styles = {
  userCommentRoot:{
    zIndex:"3",
  },
  sortOption:{
    display: "flex",
    flexDirection:"row",
    columnGap:"1.5rem",

    marginBottom: "1.4rem",
  },
  optionName:{
    backgroundColor:"#fff",
    border:"none",

    fontSize:"1rem",
    fontWeight: "600",
  },
  userCommentBox:{
    display:"flex",
    flexDirection:"row",
    width: "80%",
    columnGap: "0.5rem",

    margin: "1.4rem 0 0.5rem 0",
  },
  userProfile:{
    width: "3.1rem",
    height: "3.1rem",
  },
  userComment:{
    display:"flex",
    flexDirection:"column",
    rowGap: "1.6rem",

    width: "100%",
  },
  CommentHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "1.5rem",
  },
  rowDirection:{
    display:"flex",
    flexDirection:"row",
    alignItems:"end",
    columnGap: "0.4rem",
  },
  mailToolImg:{
    width: "1.8rem",
    height: "1.5rem",
  },
  preferTool:{
    position: "relative",
    top:"0.8rem",
  },
  preferToolImg:{
    width: "1.5rem",
    height: "1.5rem",
  }
}

const PortfolioViewUserComment:React.FC<PortfolioViewUserCommentType> = ({userComment})=>{
  const [preferIsStd, setPreferAsStd] = useState(true);
  let userCommentHTML:JSX.Element[] = []
  const [commentList, setCommentList]:any = useState<JSX.Element[]>([])
  
  useEffect(()=>{
    let sortObject:any[] = [];
    for(let ele in userComment){
      sortObject.push([ele, userComment[ele]])
    }
    if(preferIsStd){
      sortObject.sort((a,b) =>{return b[1].prefer - a[1].prefer})
    }else if(!preferIsStd){
      sortObject.sort((a,b) =>{return new Date(b[1].date).getTime() - new Date(a[1].date).getTime()})
    }
    console.log(sortObject)
    for(let i=0; i<sortObject.length; i++){
      const data = sortObject[i]
      userCommentHTML.push(
        <div>
          <div style={styles.userCommentBox}>
            <img src={data[1].profile} style={styles.userProfile} alt='userProfile'/>
            <div style={styles.userComment}>
              <div style={styles.CommentHead}>
                <div style={styles.rowDirection}>
                  <p style={{color: "#000",fontSize: "1rem",}}>{data[0]}({data[1].id})</p>
                  <p style={{color: "#000",fontSize: "0.75rem",}}>{data[1].date}</p>
                </div>
                <div style={styles.rowDirection}>
                  <p style={{color: "#888",fontSize: "0.75rem",}}>"{data[1].work}"에서</p>
                  <img src={images.mail} style={styles.mailToolImg} alt='mail'/>
                  <div style={styles.preferTool}>
                    <img src={images.thumbsUp} style={styles.preferToolImg} alt='thumbsup'/>
                    <p style={{display:"flex", justifyContent:"center", color:"#888",fontSize: "0.75rem",}}>{data[1].prefer}</p>
                  </div>
                </div>
              </div>
              <div style={{color:"#000", fontSize:"0.75rem",}}>{data[1].comment}</div>
            </div>
          </div>
          <div style={{width:"80%",height:"2px",backgroundColor:"black",}}></div>
        </div>
      )
    }
    setCommentList(userCommentHTML)
  }, [userComment, preferIsStd])

  return(
    <div style={styles.userCommentRoot}>
      <div style={styles.sortOption}>
        <button
          style={preferIsStd?{...styles.optionName, color:"black",} : {...styles.optionName, color:"grey",}}
          id='prefer' 
          onClick={()=>setPreferAsStd(true)}
        >좋아요순
        </button>
        <button 
          style={!preferIsStd?{...styles.optionName, color:"black",} : {...styles.optionName, color:"grey",}} 
          id='updated' 
          onClick={()=>setPreferAsStd(false)}
        >최신순
        </button>
      </div>
      <div>
        {commentList}
      </div>
    </div>
  )
}

export default PortfolioViewUserComment;