import "./VerificationModal.css";
import React, { useState } from "react";
import { images } from "../../../assets/images/images";
import RegisterUniv from "./RegisterUniv";

type VerificationModalType = { closeModal: (e: boolean) => void };

const VerificationModal: React.FC<VerificationModalType> = ({ closeModal }) => {
  const [onUniv, setOnUniv] = useState(false);

  const openUnivHandler = () => {
    setOnUniv(true);
  };

  const closeModaluniv = (e: any) => {
    closeModal(false);
  };

  return (
    <div>
      {onUniv && <RegisterUniv closeModal2={closeModaluniv} />}
      <div onClick={closeModaluniv} className="backdrop"></div>
      <div className="modal">
        <div onClick={closeModaluniv} className="exitbutton_container">
          <div className="exitbutton">
            <img src={images.cancelButton} alt="cancleButton" />
          </div>
        </div>
        <div className="modal_img_frame">
          <img src={images.ModalImg} alt="ModalImg" />
        </div>
        <div className="modal_content">
          <h3>아직 대학교 인증이 되지 않았어요.</h3>
          <p>
            대학교 인증을 하면 포트폴리오를 관리하고
            <br />
            외주를 받아볼 수 있어요.
          </p>
        </div>
        <div className="modal_button">
          <button onClick={openUnivHandler}>대학교 인증하기</button>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
