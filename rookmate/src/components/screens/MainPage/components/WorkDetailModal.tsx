import React, {useEffect, useState} from 'react';
import ModuleCss from "../MainPage.module.css"
import { images } from "../../../../assets/images/images";
import { useNavigate } from 'react-router-dom';

type WorkDetailModalType = {
  visible:boolean,
  setWorkModalVisible:any,
  modalImageList:any[],
}

const WorkDetailModal:React.FC<WorkDetailModalType> = ({visible, setWorkModalVisible, modalImageList})=>{
  const [commenterWrite, setCommenterWrite] = useState<any[]>([])
  const [commentPage, setCommentPage] = useState<number>(0)
  const [lastPage, setLastPage] = useState<number>(0)
  const navigate = useNavigate();

  const exitModalEvent = (e:any)=>{
    const target = e.target;
    console.log("exit modal")
    setWorkModalVisible((prev:boolean)=>false);
  }

  const handleNavigateOutsourcing = ()=>{
    navigate('/outsourcingApply');
  }

  useEffect(()=>{
    const commentAmount = 18;
    const updatedLastPage = Math.floor(commentAmount/3);
    setLastPage(()=>updatedLastPage);
    console.log(lastPage)
    let updatedCommenterWrite:any = new Array(updatedLastPage)
    for(let i=0; i<updatedLastPage; i++){
      updatedCommenterWrite[i] = new Array(3)
    }
    for(let i=0; i<commentAmount; i++){
      let y = Math.floor(i/3);
      let x = i - 3 * y;
      updatedCommenterWrite[y][x] = (
        <div className={ModuleCss.comment} key={i}>
          <img src={images.profile} style={{width:"2.5rem", height:"2.5rem",}}/>
          <div className={ModuleCss.commenterWriteContainer}>
            <p className={ModuleCss.commenterWrite}>작성자(작성자ID)</p>
            <p className={ModuleCss.commenterWrite}>작성자의 코멘트({y})</p>
          </div>
          <div className={ModuleCss.toolBox}>
            <button className={ModuleCss.tool}>
              <img src={images.mail} className={ModuleCss.toolImg}/>
            </button>
            <button className={ModuleCss.tool}>
              <img src={images.thumbsUp} className={ModuleCss.toolImg}/>
              <p>30</p>
            </button>
          </div>
        </div>
      )
    }
    setCommenterWrite((prev:any)=>[...updatedCommenterWrite])
  }, [commentPage])

  return(
    <div
      className={ModuleCss.workModalbackground}
      style={!visible?{display:"none",}:{}}
    >
      <div className={ModuleCss.workModalContainer}>
        <button className={ModuleCss.exitButton} id="exitButton" onClick={exitModalEvent}>
          <img src={images.addTag} style={{width:"5rem", height:"5rem",}}/>
        </button>
        <button className={ModuleCss.outsourcingButton} id="outsourcingButton" onClick={handleNavigateOutsourcing}>
          <img src={images.outsourcingApply} style={{width:"1.7rem", height:"2rem",}}/>
          <span style={{fontSize:"0.5rem",color:"#fff",}}>외주 문의</span>
        </button>
        <p className={ModuleCss.title}>title</p>
        <div className={ModuleCss.imageAndExplain}>
          <div className={ModuleCss.imageBox}>
            <img src={modalImageList[0]} className={ModuleCss.mainImage}/>
            <div className={ModuleCss.subImageBox}>
              <img src={modalImageList[0]} className={ModuleCss.subImage}/>
              <img src={modalImageList[0]} className={ModuleCss.subImage}/>
              <img src={modalImageList[0]} className={ModuleCss.subImage}/>
            </div>
          </div>
          <div className={ModuleCss.explainBox}>
            <div className={ModuleCss.userInfoAndTool}>
              <div className={ModuleCss.userInfoBox}>
                <img src={images.profile} style={{width:"3rem", height:"3rem",}}/>
                <div className={ModuleCss.userInfo}>
                  <p style={{fontWeight:"600",fontSize:"1.5rem",}}>홍길동(1234)</p>
                  <p>국민대학교</p>
                  <p>시각디자인</p>
                </div>
              </div>
              <div className={ModuleCss.toolContainer}>
                <button className={ModuleCss.tool}>
                  <img src={images.share} className={ModuleCss.toolImg}/>
                </button>
                <button className={ModuleCss.tool}>
                  <img src={images.mail} className={ModuleCss.toolImg}/>
                </button>
                <button className={ModuleCss.tool}>
                  <img src={images.bookMark} className={ModuleCss.toolImg}/>
                </button>
                <button className={ModuleCss.tool}>
                  <img src={images.thumbsUp} className={ModuleCss.toolImg}/>
                  <p>300</p>
                </button>
              </div>
            </div>
            <div className={ModuleCss.explainContent}>
              combine&divide 실험으로 제작한 매스모형입니다. 우드락과 아크릴을 사용해서 만들었고요.표면은 mapping을 통해 질감표현을 해보았습니다.
              그래스호퍼를 통해 모델링을 먼저 진행한 후 적당한 이미지를 찾아서 모형으로 디벨롭한 것입니다. 
            </div>
            <div className={ModuleCss.tag}>
              <p>#태그1</p>
              <p>#태그2</p>
              <p>#태그3</p>
            </div>
          </div>
        </div>
        <div className={ModuleCss.commentAndMore}>
          <div className={ModuleCss.commentContainer}>
            <p className={ModuleCss.subTitle}>Comment(10)</p>
            <div style={{display:"flex",flexDirection:"column",rowGap:"0.3rem",}}>
              {commenterWrite[commentPage]}
            </div>
            <div className={ModuleCss.pagination}>
              <span> &lt; </span>
              {commentPage>=1 && 
                <span style={{color:"grey",cursor:'pointer',}}
                  onClick={()=>
                    setCommentPage(()=>(commentPage-1))
                  }
                >{commentPage} </span>}
              <span style={{color:"black",cursor:'pointer',fontWeight:"700",}}
                onClick={()=>
                    setCommentPage(()=>(commentPage))
                }
              >{commentPage+1} </span>
              {(commentPage+2)<=lastPage && 
                <span style={{color:"grey",cursor:'pointer',}}
                  onClick={()=>
                    setCommentPage(()=>(commentPage+1))
                  }
                >{commentPage+2} </span>}
              <span> &gt; </span>
            </div>
          </div>
          <div className={ModuleCss.moreWorksContainer}>
            <p className={ModuleCss.subTitle}>More workpiece</p>
            <div className={ModuleCss.moreWorksImageBox}>
              <img src={images.mainPageExampleImage} className={ModuleCss.moreWorksImage}/>
              <img src={images.mainPageExampleImage} className={ModuleCss.moreWorksImage}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkDetailModal;