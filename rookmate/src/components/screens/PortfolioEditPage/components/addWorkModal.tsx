import React, { useState, useRef, useEffect } from "react";
import { images } from "../../../../assets/images/images";

type addWorkModalType = {
  setWorkImageList: (e: any) => void,
  setModalActive: (e:any) => void,
}
const styles:{[key:string]:React.CSSProperties} = {
  modalContainer:{
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    gap: "0.5rem",

    width:"60rem",
    height:"40rem",

    backgroundColor:"#fff",

    borderRadius:"2rem",
  },
  addImage:{
    width:"18rem",
    height:"18rem",
    borderRadius:"2rem",
    overflow: "hidden",

    cursor:"pointer",
  },
  ImageInput:{
    display:"none",
  },
  toolBox:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"end",

    width: "85%",
  },
  tools:{
    display:"flex",
    alignItems:"end",
    columnGap: "0.5rem",
  },
  saveButton:{
    width:"4.5rem",
    height:"1.5rem",
    backgroundColor:"#D9D9D9",
    border:"none",
    borderRadius:"1.5rem",
    marginLeft:"1rem",
    cursor:"pointer",
  },
  addWorkContent:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    gap:"2rem",

    width: "90%",
    height:"31%",

    border:"0.1rem solid #000",
    borderRadius:"1.5rem",
  },
  workExplain:{
    width:"50%",
    height:"76%",

    borderTop:"0.1rem solid #000",
    borderBottom:"0.1rem solid #000",
  },
  workExplainContent:{
    width:"100%",
    height:"95%",

    border:"none",
    resize : "none",
    outline:"none",
  },
  workOption:{
    display:"flex",
    flexDirection:"column",
    gap:"3rem",

    width: "40%",
  },
  optionTitle:{
    fontSize:"0.75rem",
    fontWeight:"600",
  },
  optionContent:{
    position:"relative",
    border:"none",
    outline: 'none',

    fontSize:"0.75rem",
  },
  fieldContainer:{
    display:"flex",
    flexDirection:"column",
    gap:"0.5rem",
    position:"absolute",
    left:"0",
    top:"1rem",
    width:"10rem",
    height:"8rem",
    overflowY:"scroll",
    backgroundColor:"#fff",
    padding:"0.5rem 0 0.5rem 0",
    borderRadius:"0.4rem 0.4rem 0.4rem 0.4rem",
    boxShadow:"0px 8px 8px 6px rgba(0, 0, 0, 0.25)",
    zIndex:"3",
  },
  fieldCheckBox:{
    display:"flex",
    justifyContent:"center",
    gap:"0.5rem",
  },
  fieldName:{

  },
}
const fieldList:any = [
"프론트엔드",
"홈페이지",
"어플리케이션",
"게임 개발",
"백엔드",
"데이터베이스",
"웹+모바일 디자인",
"시각디자인",
"로고, 브랜드 디자인",
"패키지 디자인",
"제품 디자인",
"건축 디자인",
"실내 디자인",
"전시 + 무대 다지안",
"의류 디자인",
"쥬열리 디자인",
"페브릭 디자인",
"산업 디자인",
"영상 기획, 디자인",
"모션 그래픽",
"파인아트",
]

const AddWorkModal:React.FC<addWorkModalType> = ({setWorkImageList, setModalActive,})=>{
  const [selectImage, setSelectImage] = useState(images.addSomething)
  const [fieldElement, setFieldElement] = useState<JSX.Element[]>();
  const [viewField, setViewField] = useState<boolean>(false);
  const [workDescription, setWorkDescription] = useState<string>();
  const [field, setField] = useState<number>(0);
  const selectedImage = useRef<any>(null);

  //이미지 파일 입력시 workImageList에 파일 집어넣음.
  const inputImageEvent = (e:any)=>{
    const imageFile = e.target.files[0];
    if(imageFile){
      const reader = new FileReader()
      reader.onload = (e:any)=>{
        const imageFileURL = e.target.result;
        setSelectImage(imageFileURL)
      }
      reader.readAsDataURL(imageFile)
    }
  }

  const addWorkImageEvent = (e:any)=>{
    e.preventDefault();
    const imageFile = {
      file:selectedImage.current!.files[0],
      description:workDescription,
      field:field,
    };
    if(imageFile){
      setWorkImageList((prev:any)=>([...prev,imageFile]));
      setModalActive(false);
    }
  }

  const handleDescription = (e:any)=>{
    const target = e.target;
    setWorkDescription(()=>target.value);
  }

  const handleSelectField = (e:any)=>{
    const target = e.target;
    setField(()=>(target.value));
  }

  useEffect(()=>{
    setFieldElement([])
    for(let i=0; i<fieldList.length; i++){
      setFieldElement((prev:any)=>[...prev,
        <div style={styles.fieldCheckBox}>
          <label htmlFor={fieldList[i]} style={styles.fieldName}>{fieldList[i]}</label>
          <input type="radio" id={fieldList[i]} name="field" value={i} onClick={handleSelectField}
            checked={i===Number(field)?true:false}
            style={{cursor:"pointer",}}
          />
        </div>
      ])
    }
  },[field])

  return(
    <div style={styles.modalContainer}>
      <p style={{fontSize:"0.75rem", fontWeight:"600", marginTop:"2rem",}}>작업 추가하기</p>
      <p style={{fontSize:"1rem", fontWeight:"600",}}>제목을 입력해주세요.</p>
      <form action="" style={styles.addImage}>
        <label  htmlFor='workImage' style={{cursor:"pointer",}}>
          <img src={selectImage} style={{width:"100%", height:"100%",objectFit: "cover",}} alt='selectedImage'/>
          <input type="file" id="workImage" style={styles.ImageInput} onInput={inputImageEvent}  ref={selectedImage}/>
        </label>
      </form>
      <p style={{fontSize:"0.5rem",}}>이미지는 6개까지 추가 가능합니다.</p>
      <div style={styles.toolBox}>
        <div style={styles.tools}>
          <input type='checkBox'/>
          <p style={{display:"flex", alignItems:"center", fontSize:"0.75rem",}}>외주 홍보하기</p>
        </div>
        <div style={styles.tools}>
          <button style={styles.saveButton}>임시저장</button>
          <button style={styles.saveButton} onClick={addWorkImageEvent}>완료</button>
        </div>
      </div>
      <div style={styles.addWorkContent}>
        <div style={styles.workExplain}>
          <textarea placeholder='최대 500자' style={styles.workExplainContent} onChange={handleDescription}></textarea>
        </div>
        <div style={styles.workOption}>
          <div style={{display:"flex", flexDirection:"column", gap:"0.7rem",}}>
            <p style={styles.optionTitle}>키워드</p>
            <input style={{...styles.optionContent, position:"relative", left:"0.6rem",}} placeholder='# 최대 6개까지 입력 가능'/>
          </div>
          <div style={{display:"flex", gap:"0.7rem",}}>
            <p style={styles.optionTitle}>분야</p>
            <div style={styles.optionContent}>
              <div style={{width:"15rem",cursor:"pointer",}}  onClick={()=>{setViewField((prev)=>!prev)}}>클릭 후 입력</div>
              {viewField &&
              <div style={styles.fieldContainer}>
                {fieldElement}
              </div>
              }
            </div>
          </div>
          <div style={{display:"flex", gap:"0.7rem",}}>
            <p style={styles.optionTitle}>웹서버 링크</p>
            <input style={styles.optionContent} placeholder='클릭 후 입력'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddWorkModal