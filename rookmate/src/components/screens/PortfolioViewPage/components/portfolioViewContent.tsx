import React from "react";
import { images } from "../../../../assets/images/images";

type PortfolioViewContentType = {
  props: {
    profileImage: string;
    name: string;
    age: number;
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
  manageOutsourcingEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

interface Styles {
  contentPage: React.CSSProperties;
  workList: React.CSSProperties;
  addSomething: React.CSSProperties;
  outsourcingManageButton: React.CSSProperties;
}

const styles: Styles = {
  contentPage: {
    width: "100%",
  },
  workList: {
    display: "flex",
    flexWrap: "wrap",

    width: "100%",
    height: "66.7%",
  },
  addSomething: {
    width: "30%",
    height: "30%",
  },
  outsourcingManageButton: {
    position: "fixed",
    bottom: "5%",
    left: "93%",
    zIndex: "3",
    width: "5.1rem",
    height: "5.1rem",
    backgroundColor: "#7FA3C5",
    border: "none",
    borderRadius: "100rem",
  },
};

const PortfolioViewContent: React.FC<PortfolioViewContentType> = ({
  props,
  checkViewListEvent,
  manageOutsourcingEvent,
}) => {
  // const handleToolButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   checkViewListEvent(e);
  // };

  // const handleManageOutsourcingButtonClick = (
  //   e: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   manageOutsourcingEvent(e);
  // };
  return (
    <div style={styles.contentPage}>
      <div style={styles.workList}>
        <img
          src={images.addSomething}
          style={styles.addSomething}
          alt="addSomething"
        />
      </div>
      <button
        style={styles.outsourcingManageButton}
        onClick={manageOutsourcingEvent}
      >
        <img
          src={images.outsourcingManage}
          style={{ width: "40%", height: "40%" }}
          alt=""
        />
        <p style={{ fontSize: "0.5rem", color: "#fff" }}>외주관리하기</p>
      </button>
    </div>
  );
};

export default PortfolioViewContent;
