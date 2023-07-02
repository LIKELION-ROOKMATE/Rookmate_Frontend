import React from "react";
import { images } from "../../../../assets/images/images";

interface Styles {
  mainPageTopAdContainer: React.CSSProperties;
  mainPageTopAdImage: React.CSSProperties;
  adTextContainer: React.CSSProperties;
  adTextTitle: React.CSSProperties;
  adTextDescription: React.CSSProperties;
}

const styles: Styles = {
  mainPageTopAdContainer: {
    position: "relative",
  },
  mainPageTopAdImage: {
    width: "100%",
    height: 221,
  },
  adTextContainer: {
    position: "absolute",
    top: "50%",
    left: "65%",
    transform: "translate(-50%, -50%)",
  },
  adTextTitle: {
    color: "#FFF",
    fontSize: "2rem",
    fontWeight: "700",
  },
  adTextDescription: {
    color: "#FFF",
    fontSize: "1.125rem",
    fontWeight: "500",
  },
};
const MainPageBody: React.FC = () => {
  return (
    <div>
      <div style={styles.mainPageTopAdContainer}>
        <img
          src={images.mainPageTopAdImage}
          style={styles.mainPageTopAdImage}
          alt="광고 이미지"
        />
        <div style={styles.adTextContainer}>
          <p style={styles.adTextTitle}>2023년 하반기 채용연계형 인턴 채용</p>
          <p style={styles.adTextDescription}>2023.06.23 ~ 2023.07.10</p>
          <p style={styles.adTextDescription}>
            궁금하다면 채용공고 보러가기 {">"}
          </p>
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "90rem",
        }}
      >
        <img src={images.mainPageExampleImage} alt="예시이미지" />
      </div>
    </div>
  );
};

export default MainPageBody;
