import React from "react";
import { images } from "../../../../assets/images/images";

type PortfolioViewProfileType = {
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
    snsIdList: any;
  };
};

const styles: { [key: string]: React.CSSProperties } = {
  displayNone: {
    display: "none",
  },
  profile: {
    width: "23rem",
    //width: "23%",
    height: "100%",
    padding: "0 0 0 2rem",
    fontSize: "0.87rem",
    fontWeight: "500",
  },
  profileImage: {
    width: "80%",
  },
  userInfo: {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",
    backgroundColor: "rgb(255, 255, 255)",
    margin: "1rem 0 1rem 0",
  },
  divisorLine: {
    backgroundColor: "#7FA3C5",
    width: "90%",
    height: "3px",
  },
  stackBox: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    fontSize: "1rem",
  },
  title: {
    marginTop: "1rem",
    marginBottom: "1rem",
    fontSize: "1rem",
    fontWeight: "600",
  },
  sns: {},
  snsList: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1.2rem",
    width: "100%",
    marginBottom: "1rem",
  },
  snsElement: {
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem",
    width: "50%",
  },
  snsImage: {
    width: "1.4rem",
    height: "1.4rem",
  },
  snsId: {
    display: "flex",
    alignItems: "end",
    fontSize: "0.5rem",
  },
};

const PortfolioViewProfile: React.FC<PortfolioViewProfileType> = ({
  props,
}) => {
  return (
    <div style={styles.profile}>
      <p style={styles.title}>프로필</p>
      <img
        src={props.profileImage}
        alt="profileImage"
        style={styles.profileImage}
      />

      <div style={styles.userInfo}>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Collage : {props.collage}</p>
        <p>Departure : {props.departure}</p>
      </div>
      <div style={styles.divisorLine}></div>

      <div style={props.viewList.stack ? {} : styles.displayNone}>
        <p style={styles.title}>스택</p>
        {props.stacks}
      </div>
      <div style={styles.divisorLine}></div>

      <div style={styles.sns}>
        <div style={styles.title}>SNS</div>
        <div style={styles.snsList}>
          {props.snsIdList.instagram && (
            <div style={styles.snsElement}>
              <img
                src={images.instagram}
                alt="instagram"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              <p style={styles.snsId}>{props.snsIdList.instagram}</p>
            </div>
          )}
          {props.snsIdList.git && (
            <div style={styles.snsElement}>
              <img
                src={images.github}
                alt="github"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              <p style={styles.snsId}>{props.snsIdList.git}</p>
            </div>
          )}
          {props.snsIdList.twitter && (
            <div style={styles.snsElement}>
              <img
                src={images.twitter}
                alt="twitter"
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              <p style={styles.snsId}>{props.snsIdList.twitter}</p>
            </div>
          )}
        </div>
      </div>
      <div style={styles.divisorLine}></div>
    </div>
  );
};

export default PortfolioViewProfile;
