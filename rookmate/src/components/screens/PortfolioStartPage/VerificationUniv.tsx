import './VerificationUniv.css'
import React from "react";
import { images } from "../../../assets/images/images";

const VerificationUniv: React.FC = () => {
  return (
    <div>
      <div className='Univ'>
        <form action="">
          <h1>대학교 등록하기</h1>
          <p>학생증이나 합격통지서를 통해 대학교를 인증합니다.<br/>대학교 인증을 하면 포트폴리오와 외주 작가 신청이 가능하며, 이 인증절차는 생략할 수 있습니다.</p>
          <div>
            <input style={{marginRight : '1.5rem'}} className='Univ_input' type="text" placeholder='   대학교 :'/>
            <input className='Univ_input' type="text" placeholder='   전공 :'/>
          </div>
          <div className='file_frame'>
            <p>이름과 대학교, 전공이 선명하게 확인될 수 있어야 하며, 발급날짜와 함께 이미지에 노출되어야합니다.<br/>인증이 완료되기 전에도 서비스를 제한적으로 이용할 수 있으며 인증알림은 카카오톡으로 전송됩니다.</p>
            <div className='file_frame2'>
              <div className='file_frame3'>
                <label htmlFor="Univ_file"><img src={images.Addfileimg} alt="Addfileimg" /></label>
                <input type="file" id='Univ_file'/>
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