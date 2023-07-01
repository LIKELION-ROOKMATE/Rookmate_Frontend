import React, {
  //  useState, useEffect, MouseEventHandler 
  } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../../../assets/images/images";

type PortfolioEditContentType = {
  props: {
    profileImage: string;
    name: string;
    age: string;
    collage: string;
    departure: string;
    viewList: {
      stack: boolean;
      timeline: boolean;
      license: boolean;
      sns: boolean;
      competition: boolean;
    };
    stacks: any;
  };
  checkViewListEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setModalActive: (element: boolean) => void;
};

interface Styles {
  displayNone: React.CSSProperties;
  stackBox: React.CSSProperties;
  stackName: React.CSSProperties;
  proficiencyBox: React.CSSProperties;
  proficiency: React.CSSProperties;
  page: React.CSSProperties;
  portfolioDetail: React.CSSProperties;
  portfolioContent: React.CSSProperties;
  workList: React.CSSProperties;
  addSomething: React.CSSProperties;
  templateEditTools: React.CSSProperties;
  toolBoxGroup: React.CSSProperties;
  explain: React.CSSProperties;
  toolBox: React.CSSProperties;
  toolBoxButton: React.CSSProperties;
  completeButton: React.CSSProperties;
}
const styles: Styles = {
  displayNone: {
    display: "none",
  },
  stackBox: {
    display: "flex",
    flexDirection: "row",

    width: "100%",

    fontSize: "1rem",
  },
  stackName: {
    width: "20%",
    fontSize: "0.8rem",

    marginRight: "5%",

    overflowWrap: "break-word",
  },
  proficiencyBox: {
    position: "relative",

    width: "60%",
    height: "1.1rem",

    margin: "0 0 1rem 0",
    border: "2px solid #7FA3C5",
    borderRadius: "10px",

    fontSize: "1rem",
  },
  proficiency: {
    position: "relative",
    right: "0.1rem",

    backgroundColor: "#7FA3C5",
    height: "100%",

    borderRadius: "10px",
  },
  page: {
    width: "100%",
    height: "65rem",
    fontFamily: "TheJamsil5Bold",
  },
  portfolioDetail: {
    display: "flex",
    flexDirection: "row",

    width: "94.9rem",
    height: "73.8%",
  },
  portfolioContent: {
    width: "77%",
    height: "100%",
    boxShadow: "-4px 0px 16px 8px rgba(0, 0, 0, 0.25)",

    padding: "4.5rem 2rem 0 4.5rem",
  },
  workList: {
    width: "100%",
    height: "66.7%",
  },
  addSomething: {
    width: "19rem",
    height: "19rem",

    padding: "none",
    border: "none",

    backgroundColor: "#fff",
  },
  templateEditTools: {
    display: "flex",
    alignItems: "end",
    flexDirection: "column",

    position: "fixed",
    left: "30%",
    bottom: "5%",

    width: "67rem",

    zIndex: "3",
  },
  toolBoxGroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "33.3%",
    fontWeight: "400",
  },
  explain: {
    display: "flex",
    alignItems: "end",

    position: "relative",
    left: "1rem",

    height: "2.5rem",

    marginBottom: "0.5rem",
    textAlign: "left",

    fontSize: "1rem",
    fontWeight: "400",
  },
  toolBox: {
    display: "flex",
    gap: "5rem",
    alignItems: "center",
    justifyContent: "center",

    width: "96%",
    height: "3.5rem",

    border: "0.3rem solid #7FA3C5",
    boxShadow: "0.25rem 0.25rem 0.5rem 0.25rem rgba(0, 0, 0, 0.25)",
    borderRadius: "3.125rem",

    backgroundColor: "#fff",
  },
  toolBoxButton: {
    display: "flex",
    justifyContent: "center",

    position: "relative",
    left: "2rem",

    border: "none",

    backgroundColor: "#fff",

    textDecoration: "none",
    fontSize: "1.5rem",
  },
  completeButton: {
    position: "relative",
    right: "2rem",

    width: "15rem",
    height: "4rem",

    border: "none",

    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "20px",
    marginTop: "2.5rem",

    backgroundColor: "#C0D9FF",

    fontSize: "1.5rem",
    color: "#fff",
  },
};

const PortfolioEditContent: React.FC<PortfolioEditContentType> = ({
  props,
  checkViewListEvent,
  setModalActive,
}) => {
  const navigate = useNavigate();

  const handleCompleteClick = () => {
    navigate("/portfolio/view");
  };
  const handleToolButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    checkViewListEvent(e);
  };
  const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setModalActive(true);
  };

  return (
    <div style={styles.portfolioContent}>
      <div style={styles.workList}>
        <button style={styles.addSomething} onClick={handleModal}>
          <img
            src={images.addSomething}
            style={{ width: "100%", height: "100%", padding: "none" }}
            alt="addSomething"
          />
        </button>
      </div>
      <div style={styles.templateEditTools}>
        <button style={styles.completeButton} onClick={handleCompleteClick}>
          Complete
        </button>
        <div style={styles.toolBoxGroup}>
          <p style={styles.explain}>원하는 목록을 추가하세요.</p>
          <div style={styles.toolBox}>
            <button
              onClick={handleToolButtonClick}
              id="stack"
              style={
                props.viewList.stack
                  ? { ...styles.toolBoxButton, color: "black" }
                  : { ...styles.toolBoxButton, color: "grey" }
              }
            >
              스택
            </button>
            <button
              onClick={handleToolButtonClick}
              id="timeline"
              style={
                props.viewList.timeline
                  ? { ...styles.toolBoxButton, color: "black" }
                  : { ...styles.toolBoxButton, color: "grey" }
              }
            >
              타임라인
            </button>
            <button
              onClick={handleToolButtonClick}
              id="license"
              style={
                props.viewList.license
                  ? { ...styles.toolBoxButton, color: "black" }
                  : { ...styles.toolBoxButton, color: "grey" }
              }
            >
              자격증
            </button>
            <button
              onClick={handleToolButtonClick}
              id="sns"
              style={
                props.viewList.sns
                  ? { ...styles.toolBoxButton, color: "black" }
                  : { ...styles.toolBoxButton, color: "grey" }
              }
            >
              SNS
            </button>
            <button
              onClick={handleToolButtonClick}
              id="competition"
              style={
                props.viewList.competition
                  ? { ...styles.toolBoxButton, color: "black" }
                  : { ...styles.toolBoxButton, color: "grey" }
              }
            >
              공모전
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioEditContent;
