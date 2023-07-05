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
            <img src={images.cancelButton} alt="cancleButton" />
          </div>
        </div>
        <form onSubmit={GoPortfolioMakePage} action="">
          <h1>대학교 등록하기</h1>
          <p>대학 정보를 입력하여 자신의 정보를 인증합니다.<br/>아래 내용들은 포트폴리오 창에 자동으로 게시되므로 유의해주시기 바랍니다.</p>
          <div>
            <input onChange={checkuniv} style={{marginRight : '2rem'}} className='Univ_input' type="text" placeholder='   대학교 :'/>
            <input onChange={checkmajor} className='Univ_input' type="text" placeholder='   전공 :'/>
          </div>
          <div>
            <input className='Univ_email' placeholder='  대학교 이메일 :' type="email" />
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