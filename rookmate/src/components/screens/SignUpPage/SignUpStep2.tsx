import React, {useState, useEffect, useCallback} from 'react';
import {images} from '../../../assets/images/images';
import './SignUp.css'

interface Styles{
  signupForm:React.CSSProperties;
  inputBoxContainer:React.CSSProperties;
  inputBox:React.CSSProperties;
  inputBoxSmall:React.CSSProperties;
  inputTypeName:React.CSSProperties;
  inputBoxMiddle:React.CSSProperties;
  majorOptions:React.CSSProperties;
  majorOptionsContent:React.CSSProperties;
  inputBoxMiddleInputPart:React.CSSProperties;
  submitButton:React.CSSProperties;
  collegeAccessBox:React.CSSProperties;
  collegeAccessExplain:React.CSSProperties;
  addCollegeInfoButton:React.CSSProperties;
  addCollegeInfoExplain:React.CSSProperties;
  formSubmitButton:React.CSSProperties;
}
const styles:Styles = {
  signupForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.3rem",

    width:"100vw",
    minWidth:"50rem",
  },
  inputBoxContainer:{
    display:"flex",
    columnGap:"1.2rem",
    
    width:"32rem",
  },
  inputBox:{
    width:"33%",
    height:"3rem",

    borderRadius:"0.7rem",
    border:"1px solid #000",
    paddingLeft:"0.8rem",
  },
  inputBoxSmall:{
    display:"flex",
    alignItems:"center",

    width:"50%",
    height:"3rem",

    border:"0.1rem solid #000",
    borderRadius:"0.8rem",
  },
  inputTypeName:{
    display:"flex",

    margin:"0 1rem 0 1rem",
  },
  inputBoxMiddle:{
    position:"relative",

    display:"flex",
    alignItems:"center",

    width:"31.8rem",
    height:"3rem",

    border:"0.1rem solid #000",
    borderRadius:"0.8rem",
  },
  majorOptions:{
    display:"flex",
    flexDirection:"column",
    gap:"1.1rem",

    position:"absolute",
    left: "15%",
    top:"110%",

    width:"85%",

    borderRadius:"0.3rem",
    boxShadow:"2px 2px 7px 3px rgba(152,152,152,0.75)",
    padding:"1rem 0 1rem 0",

    zIndex:"1",

    backgroundColor:"#fff",
  },
  majorOptionsContent:{
    display:"flex",
    justifyContent:"space-between",
  },
  inputBoxMiddleInputPart:{
    width:"80%",

    border:"none",
    outline:"none",
  },
  submitButton:{
    width:"31.8rem",
    height:"3rem",

    borderRadius:"0.7rem",
    border:"none",

    backgroundColor:"#7FA3C5",

    fontSize:"1.5rem",
    fontWeight:"900",
    color:"#fff",
  },
  collegeAccessBox:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",

    width:"66%",
    height:"28rem",

    borderRadius:"0.625rem",
    border:"0.1rem solid #000",
  },
  collegeAccessExplain:{
    display:"flex",
    flexWrap:"wrap",

    position:"relative",
    left:"0.8rem",

    width:"80%",
    
    fontSize:"0.8rem",
    fontWeight:"400",
  },
  addCollegeInfoButton:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    rowGap:"1.5rem",

    position:"relative",
    left:"29%",

    width:"42%",
    height:"46vh",

    backgroundColor:"#D9D9D9",
    border:"none",
    marginTop:"1rem",
    marginBottom:"1.3rem",

    cursor:"pointer",
  },
  addCollegeInfoExplain:{
    marginTop:"0",
    marginBottom:"0",

    textAlign:"center",
    fontSize:"1.5rem",
    fontWeight:"400",
  },
  formSubmitButton:{
    width:"10rem",
    height:"3.5rem",

    border:"none",
    borderRadius:"5rem",
    marginBottom:"3rem",
    marginTop:"1rem",

    backgroundColor:"#7FA3C5",

    fontSize:"1.7rem",
    fontWeight:"400",
    color:"#fff",
  },
}
const jobList:string[] = [
  '대학생',
  '직장인',
  '프리랜서',
  '스타트업 창업가',
  '취업 준비생',
  '기타',
]
const optionList:any = {
"프론트엔드":"frontend",
"홈페이지":"homepage",
"어플리케이션":"app",
"게임":"game",
"백엔드":"backend",
"데이터":"data",
"웹+모바일 디자인":"webMobileDesign",
"시각디자인":"visualDesign",
"로고, 브랜드 디자인":"logoBrandDesign",
"패키지 디자인":"packageDesign",
"제품 디자인":"productDesign",
"건축 디자인":"architecturalDesign",
"실내 디자인":"interiorDesign",
"전시 + 무대 다지안":"exhibitionStageDesign",
"의류 디자인":"clothingDesign",
"쥬열리 디자인":"jewelryDesign",
"페브릭 디자인":"fabricDesign",
"산업 디자인":"industrialDesign",
"영상 기획, 디자인":"vedioPlanningDesign",
"모션 그래픽":"motionGraphic",
"파인아트":"fineArt",
}

const SignUp = ()=>{
  const [optionElement, setOptionElement] = useState<JSX.Element[]>([]);
  const [optionListVisible, setOptionListVisible] = useState<boolean>(false);
  const [checkedItem, setCheckedItem] = useState<{ [key: string]: boolean }>({});
  const [checkCount, setCheckCount] = useState<number>(0);

  const [jobElement, setjobElement] = useState<JSX.Element[]>([]);
  const [jobListVisible, setJobListVisible] = useState<boolean>(false);

  const [selectImage, setSelectImage] = useState(undefined);

  useEffect(() => {
    let updatedCheckedItem: { [key: string]: boolean } = {};
    let updatedJobItem: { [key: string]: boolean } = {};
    for (let ele in optionList) {
      const optionListElement: string = optionList[ele];
      updatedCheckedItem[optionListElement] = false;
    }

    setCheckedItem(updatedCheckedItem);
  }, []);
  const majorCheckboxOnClickEvent = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const target = e.target as any;
    const id = target.id;
    let functionExit = false;
    setCheckCount((prev)=>{
      if(target.checked && !checkedItem[id]){
        setCheckCount((prev)=>(prev+1))
        setCheckedItem((prev)=>({...prev, [target.id]:true,}))
      }else if(!target.checked && checkedItem[id]){
        setCheckCount((prev)=>(prev-1))
        setCheckedItem((prev)=>({...prev, [target.id]:false,}))
      }
      if(prev>=9 && target.checked){
        target.checked = false;
        functionExit = true;
      }
      return prev;
    })
  };
  useEffect(() => {
    let tmpOptionElement: JSX.Element[] = [];
    for (let element in optionList) {
      const id = optionList[element];
      tmpOptionElement.push(
        <div style={styles.majorOptionsContent} key={optionList[element]}>
          <label htmlFor={optionList[element]} style={{ display: "flex", justifyContent: "center", width: "50%" }}>
            {element}
          </label>
          <input
            type="checkbox"
            id={id}
            onClick={(e:any)=>{
              majorCheckboxOnClickEvent(e);
            }}
            checked = {checkedItem[id]}
            style={{ marginRight: "1rem" }}
          />
        </div>
      );
    }
    setOptionElement(tmpOptionElement);
  }, [optionListVisible, checkedItem]);

  useEffect(() => {
    let tmpJobElement: JSX.Element[] = [];
    for (let element in jobList) {
      const id = jobList[element];
      tmpJobElement.push(
        <div style={styles.majorOptionsContent} key={optionList[element]}>
          <label htmlFor={optionList[element]} style={{ display: "flex", justifyContent: "center", width: "50%" }}>
            {jobList[element]}
          </label>
          <input
            type="radio"
            id={id}
            name='job'
            style={{ marginRight: "1rem" }}
          />
        </div>
      );
    }
    setjobElement(tmpJobElement);
  }, [jobListVisible]);

  const getImageEvent = (e:any)=>{
    const inputFile = e.target.files[0];
    if(inputFile){
      const reader = new FileReader();
      reader.onload = (e:any)=>{
        const inputFileUrl = e.target.result;
        setSelectImage(inputFileUrl)
      }
      reader.readAsDataURL(inputFile)
    }
  };

  return(
    <form style={styles.signupForm}>
      <p style={{fontSize:"2rem", fontWeight:"700",}}>필수정보 입력</p>
      <div style={styles.inputBoxContainer}>
        <label htmlFor='name' style={styles.inputBoxSmall}>
          <p style={styles.inputTypeName}>이름 : </p>
          <input type="text" id='name' style={{width:"63%", height:"95%", border:"none", outline:"none",marginRight:"0.8rem",fontSize:"1rem",}}/>
        </label>
        <label htmlFor='birth' style={styles.inputBoxSmall}>
          <p style={styles.inputTypeName}>생년월일 : </p>
          <input type="text" id='birth' style={{width:"50%", height:"95%", border:"none", outline:"none",marginRight:"0.8rem", }}  placeholder='YYYY-MM-DD'/>
        </label>
      </div>
      <label htmlFor='phoneNumber' style={styles.inputBoxMiddle}>
        <p style={styles.inputTypeName}>핸드폰 : </p>
        <input type='text' id='phoneNumber' style={styles.inputBoxMiddleInputPart}/>
      </label>
      <div style={styles.inputBoxMiddle} id='major'
        onClick={(e:any)=>{
          const id = e.target.id as string;
          if(id == 'major'){
            setOptionListVisible(!optionListVisible)
            setJobListVisible(false)
          }}} 
      >
        <p style={styles.inputTypeName} id='major'>관심분야 : </p>
        {
          optionListVisible &&
          <div style={styles.majorOptions}>
            {optionElement}
          </div>
        }
      </div>
      
      <div style={styles.inputBoxMiddle} id='job'
        onClick={(e:any)=>{
        const id = e.target.id as string;
        if(id == 'job'){
          setOptionListVisible(false)
          setJobListVisible(!jobListVisible)
        }}} 
      >
        <p style={styles.inputTypeName}>직업 : </p>
        {
          jobListVisible &&
          <div style={styles.majorOptions}>
            {jobElement}
          </div>
        }
      </div>
      <button style={styles.submitButton}>회원가입</button>

      <div style={{width:"80%", height:"0.1rem",backgroundColor:"#000",marginTop:"7rem",}}></div>

      <p style={{fontSize:"2rem", fontWeight:"700",}}>대학교 등록하기 (선택)</p>
      <div style={{...styles.inputBoxContainer, width:"66%"}}>
        <label htmlFor='schoolName' style={styles.inputBoxSmall}>
          <p style={styles.inputTypeName}>대학교 : </p>
          <input type="text" id='schoolName' style={{width:"75%", height:"95%", border:"none", outline:"none",marginRight:"0.8rem",fontSize:"1rem",}}/>
        </label>
        <label htmlFor='major' style={styles.inputBoxSmall}>
          <p style={styles.inputTypeName}>전공 : </p>
          <input type="text" id='major' style={{width:"75%", height:"95%", border:"none", outline:"none",marginRight:"0.8rem", }}/>
        </label>
      </div>
      <div style={styles.collegeAccessBox}>
        <div>
          <p style={styles.collegeAccessExplain}>이름과 대학교, 전공이 선명하게 확인될 수 있어야 하며, 발급날짜와 함께 이미지에 노출되어야합니다.</p>
          <p style={styles.collegeAccessExplain}>인증이 완료되기 전에도 서비스를 제한적으로 이용할 수 있으며 인증알림은 카카오톡으로 전송됩니다.</p>
        </div>
        <input type='file' id='addCollegeInfo' style={{display:"none",}} onChange={getImageEvent}/>
        { !selectImage &&
          <label htmlFor='addCollegeInfo' style={{...styles.addCollegeInfoButton,}}>
            <img src={images.addCollegeInfo} alt='addCollegeInfo'/>
            <p style={styles.addCollegeInfoExplain}>사진 등록하기</p>
          </label>
        }{ selectImage &&
          <label htmlFor='addCollegeInfo' style={{...styles.addCollegeInfoButton, backgroundColor:"#fff", border:"0.1rem solid #000",}}>
            <img src={selectImage} alt='addCollegeInfo' style={{width:"90%", height:"90%",}} id="collegeInfoImage"/>
          </label>
        }
      </div>
      <button style={styles.formSubmitButton}>완료</button>
    </form>
  )
}

export default SignUp;