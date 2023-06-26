import React, {useState, useEffect} from 'react';
import { images } from "../../../../assets/images/images";
import { relative } from 'path';

interface Styles{
  OutsourcingApplyOptionStyle:React.CSSProperties;
  OptionBox:React.CSSProperties;
  SpeedAndSatisfy:React.CSSProperties;
  PriceAndApply:React.CSSProperties;
  Price:React.CSSProperties;
  ApplyButton:React.CSSProperties;
  UseOption:React.CSSProperties;
  OptionStyle:React.CSSProperties;
  KeywordBox:React.CSSProperties;
  workOptionBox:React.CSSProperties;
  workOption:React.CSSProperties;
}

const styles:Styles = {
  OutsourcingApplyOptionStyle:{
    display: "flex",
    flexDirection: "row",

    position: "relative",
    left: "17rem",

    width: "58.5rem",

    marginBottom: "1.8rem",
  },
  OptionBox: {
    width: "48%",
  },
  SpeedAndSatisfy: {
    display: "flex",
    flexDirection:"row",
    alignItems: "end",
    gap: '1.5rem',

    marginBottom: "0.5rem",
  },
  PriceAndApply: {
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
    gap: '2rem',

    marginBottom: "2rem",

    width: "100%",
    height: "3.34156rem",
  },
  Price:{
    color: "#000",
    fontSize: "2.25rem",
  },
  ApplyButton:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: "9.75rem",
    height: "3.34156rem",

    borderRadius: "100px",
    border: "none",
    backgroundColor: "#7FA3C5",

    color: "#FFF",
    fontSize: "1.125rem",
    fontWeight: "700",
  },
  UseOption: {
    display:"flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap:"1.75rem",
  },
  OptionStyle: {
    display: 'flex',
    alignItems: 'center',
    gap: "0.7rem",

    width: "50%",
  },
  KeywordBox:{
    display: "flex",
    flexDirection:"row",
    gap: "1.5rem",

    marginTop: "2.4rem",
    marginBottom: "3.75rem",

    color: "#000",
    fontSize: "0.875rem",
  },
  workOptionBox: {
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",

    gap:"1.75rem",
  },
  workOption:{
    display: "flex",
    gap: "1.5rem",
  }
}

const OutsourcingApplyOption = ()=>{ 
  const [price, setPrice] = useState(0);
  const [keywords, setKeywords] = useState([])
  const [useOption, setUseOption] = useState([])
  const [due, setDue] = useState(2)
  const [availWork, setAvailWork] = useState([])

  useEffect(()=>{
      let keywordElemnet:any = [];
      let keywordList:string[] = ['k1', 'k2', 'k3'];
      for(let i=0; i<keywordList.length; i++){
        keywordElemnet.push(
          <p>#{keywordList[i]}</p>
        );
      }
      setKeywords(keywordElemnet)
  }, [])

  useEffect(()=>{
    let useOptionList:any = {
      "원본파일 수정": true,
      "상업적 이용": true,
      "추가 수정": true,
      "재가공": false,
    }
    let useOptionElement:any = []
    for(let e in useOptionList){
      let src = ''
      if(useOptionList[e] == true){
        src = images.check
      }else{
        src = images.deleteTag
      }
      useOptionElement.push(
        <div style={styles.OptionStyle}>
          <p style={{width:"48%"}}>{e}</p>
          <img src={src} style={{width:"10%"}} alt='checkOption'/>
        </div>
      )
    }
    setUseOption(useOptionElement);
  }, [])

  useEffect(()=>{
    let availWorkList:any = ["로고 디자인", "타이포그래피"]
    let availWorkElement:any = []
    for(let e in availWorkList){
      availWorkElement.push(
        <p>{availWorkList[e]}</p>
      )
    }
    setAvailWork(availWorkElement)
  }, [])
  return(
    <div style={styles.OutsourcingApplyOptionStyle}>
      <div style={styles.OptionBox}>
        <div style={styles.SpeedAndSatisfy}>
          <p id='response'>평균 5분 내 답장</p>
          <p id='satisfy'>90% 만족도</p>
        </div>
        <div style={styles.PriceAndApply}>
          <p style={styles.Price}>{price}원~</p>
          <p style={styles.ApplyButton}>문의하기</p>
        </div>
        <div style={styles.UseOption}>
          {useOption}
        </div>
      </div>
      <div style={styles.OptionBox}>
        <div style={styles.KeywordBox}>
          {keywords}
        </div>
        <div style={styles.workOptionBox}>
          <div style={styles.workOption}>
            <p>작업일</p>
            <p>{due}일 이내</p>
          </div>
          <div style={styles.workOption}>
            <p>작업 가능</p>
            <p style={styles.workOption}>{availWork}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutsourcingApplyOption;