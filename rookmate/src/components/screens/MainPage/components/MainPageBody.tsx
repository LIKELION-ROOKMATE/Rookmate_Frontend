/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { images } from "../../../../assets/images/images";
import moduleCss from "../MainPage.module.css";
import WorkDetailModal from "./WorkDetailModal";

interface Styles {
  mainPageTopAdContainer: React.CSSProperties;
  mainPageTopAdImage: React.CSSProperties;
  adTextContainer: React.CSSProperties;
  adTextTitle: React.CSSProperties;
  adTextDescription: React.CSSProperties;
  adTextDescription2: React.CSSProperties;
  mainPageImageContainer: React.CSSProperties;
  mainPageImageItem: React.CSSProperties;
  mainPageImage: React.CSSProperties;
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
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    position: "absolute",
    top: "50%",
    left: "70%",
    width: "40%",
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
  adTextDescription2: {
    color: "#FFF",
    fontSize: "1.125rem",
    fontWeight: "500",
    cursor: "pointer",
  },
  mainPageImageContainer: {
    width: "90%",
    margin: "1rem auto",
    padding: "0",
    boxSizing: "border-box",
    columns: "5",
  },
  mainPageImageItem: {
    flex: "1 1 250px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainPageImage: {
    width: "100%",
  },
};

const ImageList = [
  images.main1,
  images.main4,
  images.main7,
  images.main10,
  images.main13,
  images.main17,
  images.main2,
  images.main5,
  images.main8,
  images.main11,
  images.main14,
  images.main3,
  images.main6,
  images.main9,
  images.main12,
  images.main15,
  images.main17,
  images.main4,
  images.main6,
  images.main3,
  images.main7,
  images.main6,
  images.main3,
  images.main1,
  images.main8,
  images.main3,
  images.main12,
  images.main10,
  images.main4,
  images.main8,
]

const MainPageBody: React.FC = () => {
  const [loadedImage, setLoadedImage] = useState<JSX.Element[]>([]);
  const [imageFilter, setImageFilter] = useState<string>("all");
  const [workModalVisible, setWorkModalVisible] = useState<boolean>(false);
  const [modalImageList, setModalImageList] = useState<any[]>([]);

  const showModalEvent = (e: any) => {
    setModalImageList(() => [e.target.src]);
    setWorkModalVisible((prev) => !prev);
    console.log(workModalVisible);
  };

  //이미지 목록을 loadedImage에 JSX 형식으로 저장
  useEffect(() => {
    const updatedLoadedImage: JSX.Element[] = [];
    for (let ele in ImageList) {
      const fileUrl = ImageList[ele];
      updatedLoadedImage.push(
        <div className={moduleCss.mainPageImageItem} onClick={showModalEvent}>
          <img
            src={fileUrl}
            alt="예시이미지"
            className={moduleCss.mainPageImage}
          />
        </div>
      );
    }
    setLoadedImage((prev) => [...prev, ...updatedLoadedImage]);
  }, [ImageList]);
  //이미지 표시 기준을 변경
  const changeImageFilterStandard = (e: any) => {
    const text = e.target.innerText;
    if (imageFilter === text) {
      return;
    } else if (text === "all") {
      setImageFilter((prev) => "all");
    } else if (text === "outsourcing") {
      setImageFilter((prev) => "outsourcing");
    }
  };
  const handleAdClick = () => {
    window.location.href =
      "https://recruit.posco.com/h22a01-front/H22A1001.html?id=118000";
  };
  return (
    <div>
      <WorkDetailModal
        visible={workModalVisible}
        setWorkModalVisible={setWorkModalVisible}
        modalImageList={modalImageList}
      />
      <div style={styles.mainPageTopAdContainer}>
        <img
          src={images.mainPageTopAdImage}
          style={styles.mainPageTopAdImage}
          alt="광고 이미지"
        />
        <div style={styles.adTextContainer}>
          <p style={styles.adTextTitle}>2023년 하반기 채용연계형 인턴 채용</p>
          <p style={styles.adTextDescription}>2023.06.23 ~ 2023.07.10</p>
          <p style={styles.adTextDescription2} onClick={handleAdClick}>
            궁금하다면 채용공고 보러가기 {">"}
          </p>
        </div>
      </div>
      <div className={moduleCss.filterContainer}>
        <button
          className={moduleCss.filter}
          onClick={changeImageFilterStandard}
          style={
            imageFilter === "all" ? { color: "#000" } : { color: "#9C9C9C" }
          }
        >
          all
        </button>
        <button
          className={moduleCss.filter}
          onClick={changeImageFilterStandard}
          style={
            imageFilter === "outsourcing"
              ? { color: "#000" }
              : { color: "#9C9C9C" }
          }
        >
          outsourcing
        </button>
      </div>
      <div className={moduleCss.mainPageImageContainer}>{loadedImage}</div>
    </div>
  );
};

export default MainPageBody;
