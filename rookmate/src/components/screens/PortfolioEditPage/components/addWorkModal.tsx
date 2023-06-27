import React, { useState, useEffect } from "react";
import { images } from "../../../../assets/images/images";

interface Styles{
  modalContainer:React.CSSProperties,
  addImage:React.CSSProperties,
  ImageInput:React.CSSProperties,
  toolBox:React.CSSProperties,
  tools:React.CSSProperties,
  saveButton:React.CSSProperties,
  addWorkContent:React.CSSProperties,
  workExplain:React.CSSProperties,
  workExplainContent:React.CSSProperties,
  workOption:React.CSSProperties,
  optionTitle:React.CSSProperties,
  optionContent:React.CSSProperties,
}

const styles:Styles = {
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
    border:"none",
    outline: 'none',

    fontSize:"0.75rem",
  },
}

const AddWorkModal = ()=>{
  const [selectImage, setSelectImage] = useState(images.addSomething)

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

  return(
    <div style={styles.modalContainer}>
      <p style={{fontSize:"0.75rem", fontWeight:"600", marginTop:"2rem",}}>작업 추가하기</p>
      <p style={{fontSize:"1rem", fontWeight:"600",}}>제목을 입력해주세요.</p>
      <form action="" style={styles.addImage}>
        <label  htmlFor='workImage'>
          <img src={selectImage} style={{width:"100%", height:"100%",objectFit: "cover",}} alt='selectedImage'/>
          <input type="file" id="workImage" style={styles.ImageInput} onInput={inputImageEvent}/>
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
          <button style={styles.saveButton}>완료</button>
        </div>
      </div>
      <div style={styles.addWorkContent}>
        <div style={styles.workExplain}>
          <textarea placeholder='최대 500자' style={styles.workExplainContent}></textarea>
        </div>
        <div style={styles.workOption}>
          <div style={{display:"flex", flexDirection:"column", gap:"0.7rem",}}>
            <p style={styles.optionTitle}>키워드</p>
            <input style={{...styles.optionContent, position:"relative", left:"0.6rem",}} placeholder='# 최대 6개까지 입력 가능'/>
          </div>
          <div style={{display:"flex", gap:"0.7rem",}}>
            <p style={styles.optionTitle}>분야</p>
            <input style={styles.optionContent} placeholder='클릭 후 입력'/>
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