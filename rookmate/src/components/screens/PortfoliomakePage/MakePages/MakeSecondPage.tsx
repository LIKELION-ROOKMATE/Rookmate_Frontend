import React, { useState } from "react";
import { images } from "../../../../assets/images/images";
import "./MakeSecondPage.css";
import SecondPageUI from "./UI/SecondPageUI";
import PortfolioEdit from "../../PortfolioEditPage/PortfolioEdit";
import MakeProgress from "../MakeProgress";

const MakeSecondPage: React.FC = () => {
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const onsecondUI = () => {
    setSecond(true);
  };

  const outsecondUI = () => {
    setSecond(false);
  };

  const goThirdPage = () => {
    setThird(true);
  };

  return (
    <div>
      {!third && <MakeProgress />}
      <div
        id="second"
        className={!third ? "" : "invisible"}
        onClick={goThirdPage}
      >
        <h2>템플릿 선택</h2>
        <div className="template">
          <div
            className="select"
            onMouseOver={onsecondUI}
            onMouseOut={outsecondUI}
          >
            <div className="second_img_frame">
              {second && <SecondPageUI />}
              {!second && <img src={images.MakeImage1} alt="MakeImage1" />}
            </div>
            <div className="template_content">
              <h2>Basic</h2>
              <div className="hashtag">
                <p>#심플한</p>
                <p>#모던한</p>
                <p>#깔끔한</p>
              </div>
              <p>
                깔끔하고 군더더기 없는 템플릿으로 포트폴리오를 시작해보세요!
              </p>
            </div>
          </div>

          <div className="template">
            <div className="select">
              <div className="second_img_wrap">
                <div className="second_img_frame2">
                  <img src={images.MakeImage2} alt="MakeImage2" />
                </div>
                <div className="second_text">
                  <div className="crownimg_frame">
                    <img src={images.crownImg} alt="crownimg" />
                  </div>
                  <div>
                    <p style={{ color: "white" }}>
                      구독하면 프리미엄 템플릿을 <br />
                      사용할 수 있어요.
                    </p>
                  </div>
                </div>
              </div>
              <div className="template_content">
                <h2>Modern</h2>
                <div className="hashtag">
                  <p>#깔끔한</p>
                  <p>#분위기있는</p>
                  <p>#모던한</p>
                </div>
                <p>분위기 있는 디자인 팜플렛으로 포트폴리오를 시작해보세요!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {third && <PortfolioEdit />}
    </div>
  );
};

export default MakeSecondPage;
