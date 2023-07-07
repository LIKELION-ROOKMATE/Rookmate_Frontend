import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Portfoliostart.css";
import { images } from "../../../assets/images/images";
import TopBar from "../../TopBar";
import VerificationModal from "./VerificationModal";
import axios from 'axios'
import { Cookies, useCookies } from 'react-cookie'
import { log } from "console";


const PortfoliostartPage: React.FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userId", "accessToken", "refreshToken"])

  // navigate
  const navigate = useNavigate();
  const handleStartPortfolio = () => {
    if(cookies.accessToken) {
      axios.get(`http://127.0.0.1:8000/users/${cookies.userId}/`,{
        headers:{Authorization: `Bearer ${cookies.accessToken}`
      }}).then((res)=>{
        if(res.data.univ) {
          navigate("/portfolio/make")
        } else {
          openModalHandler()
        }
      }).catch((err)=>{
        console.log(err);
        
      }) 
    } else {
      openModalHandler()
    }
  };


  const handleMoreInformation = () => {
    navigate("#");
  };

  //modal
  const [onModal, setOnModal] = useState(false);

  //대학교 인증이 되지 않았다는 Modal
  const openModalHandler = () => {
    setOnModal(true);
  };

  const closeModalHandler = (e: boolean) => {
    setOnModal(e);
  };

  return (
    <div>
      <div>
        <TopBar />
      </div>
      {onModal && <VerificationModal closeModal={closeModalHandler} />}
      <div className="box box1">
        <div className="box1content">
          <p>아직 포트폴리오를 만들지 않았나요?</p>
          <br />
          <p style={{ fontWeight: 200, fontSize: "1.7rem" }}>
            룩메이트에서 쉽고 간단하게
            <br />
            당신만의 포트폴리오를 관리하세요.
          </p>
        </div>
        <div className="startbtn">
          <button onClick={handleStartPortfolio}>포트폴리오 시작하기</button>
        </div>
      </div>

      <div className="box box2">
        <div style={{ padding: "5rem 0" }}>
          <h2>
            번거로운 대학생 포트폴리오
            <br />
            이제는 <span className="fontcolor">룩메이트</span>로?
          </h2>
        </div>
        <div className="box2content">
          <div className="box2content2">
            <h3>
              당신만의 <span className="fontcolor">포트폴리오</span>를<br />
              편하고 트렌디하게 만들어보세요.
            </h3>
            <p style={{ fontWeight: 600 }}>
              학생들을 위해 준비되어 있는 룩메이트의 포트폴리오를
              <br /> SNS를 관리하듯 스타일리시하게 관리해 보아요.
            </p>
          </div>
          <div>
            <img src={images.image2} alt="RookMate" />
          </div>
        </div>
        <div className="box2content3">
          <h3>
            다른 학생들과 함께 작업물을
            <br />
            공유하고 이야기를 나눠요.
          </h3>
          <div style={{ margin: "1rem 0", paddingBottom: "1.5rem" }}>
            <img src={images.image3} alt="RookMate" />
          </div>
          <p style={{ fontWeight: 600, textAlign: "center" }}>
            함께 성장하는 학생들을 위하여 다양한 의견을 펼쳐보세요.
            <br />
            취향에 맞는 학생들을 만나 서로의 작업물을 주기적으로 확인해볼 수
            있어요.
          </p>
        </div>
      </div>

      <div className="box box3">
        <h3>
          수많은 경쟁자들로 치열한 외주받기?
          <br />
          룩메이트에서 첫출발해봐요.
        </h3>
        <p>
          전문가들에게 밀려 외주 한 번 받기 어려우신가요?
          <br />
          학생들을 필요로하는 클라이언트가 기다리고 있어요.
        </p>
        <div className="box3content">
          <div>
            <h4>전문가급 실력을 가지지 않아도 OK</h4>
            <div className="img_frame">
              <img src={images.pfstartimg1} alt="RookMate" />
            </div>
            <p>
              룩메이트의 고객들은 전문가급의 실력을
              <br />
              필수로 여기지 않아요!
            </p>
          </div>
          <div>
            <h4>용돈이 부족하다면 룩메이트에서</h4>
            <div className="img_frame">
              <img src={images.pfstartimg2} alt="RookMate" />
            </div>
            <p>
              포트폴리오만 올리면 빠르게 시작할 수 있는 외주. <br />돈 벌기
              번거롭지 않아요.
            </p>
          </div>
          <div>
            <h4>능력,커리어,포폴 일석삼조</h4>
            <div className="img_frame">
              <img src={images.pfstartimg3} alt="RookMate" />
            </div>
            <p>
              학생에게 맞는 외주시스템으로 자신의
              <br />
              실력을 즐겁게 향상시킬 수 있어요.
            </p>
          </div>
        </div>
      </div>

      <div className="box box4">
        <h3>이제는 즐거운 학생들의 아카이빙</h3>
        <div style={{ paddingBottom: "3rem" }}>
          <button onClick={handleStartPortfolio} className="endbtn">
            포트폴리오 시작하기
          </button>
        </div>
        <p onClick={handleMoreInformation} style={{ paddingBottom: "6rem" }}>
          더 알아보기
        </p>
      </div>
    </div>
  );
};

export default PortfoliostartPage;
