import './RegisterUniv.css'
import React, { useState } from "react";
import { images } from "../../../assets/images/images";
import { useNavigate } from "react-router-dom";

type RegisterUnivType = {closeModal2: (e:boolean) => void;}

const VerificationUniv: React.FC<RegisterUnivType> = ({closeModal2}) => {
  const navigate = useNavigate();
  const [univ, setUniv] = useState('')
  const [major, setMajor] = useState('')
  const [univimg, setUnivimg] = useState('')

  //form값 데이터 반영
  const checkuniv = (event:any) => {
    setUniv(event.target.value)
  }
  const checkmajor = (event:any) => {
    setMajor(event.target.value)
  }
  const checkunivimg = (event:any) => {
    setUnivimg(event.target.value)
  }

  //PortfolioMakePage를 넘어가기 위한 조건, 조건만족시 이동
  const GoPortfolioMakePage = () => {

    // if(univ.trim().length === 0 || major.trim().length === 0 || !univimg) {
    //   return <VerificationUniv/>
    // } else {
    //   navigate("/portfolio/make");}
      navigate("/portfolio/make");}

  //Modal close button
  const closeRegisteruniv= (e:React.MouseEvent) => {
    closeModal2(false)
  }     
  return (
    <div>
      <div className='Univ'>
        <div onClick={closeRegisteruniv} className='exitbutton2_container'>
          <div className='exitbutton2'>
            <p>X</p>
          </div>
        </div>
        <form onSubmit={GoPortfolioMakePage} action="">
          <h1>대학교 등록하기</h1>
          <p>학생증이나 합격통지서를 통해 대학교를 인증합니다.<br/>대학교 인증을 하면 포트폴리오와 외주 작가 신청이 가능하며, 이 인증절차는 생략할 수 있습니다.</p>
          <div>
            <input onChange={checkuniv} style={{marginRight : '2rem'}} className='Univ_input' type="text" placeholder='   대학교 :'/>
            <input onChange={checkmajor} className='Univ_input' type="text" placeholder='   전공 :'/>
          </div>
          <div className='file_frame'>
            <p>이름과 대학교, 전공이 선명하게 확인될 수 있어야 하며, 발급날짜와 함께 이미지에 노출되어야합니다.<br/>인증이 완료되기 전에도 서비스를 제한적으로 이용할 수 있으며 인증알림은 카카오톡으로 전송됩니다.</p>
            <div className='file_frame2'>
              <div className='file_frame3'>
                <label htmlFor="Univ_file"><img src={images.Addfileimg} alt="Addfileimg" /></label>
                <input onChange={checkunivimg} type="file" id='Univ_file'/>
                <p>사진 등록하기</p>
              </div>
            </div>
          </div>
          <div className='Univ_button'>
            <button>완료</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default VerificationUniv