/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { images } from "../../../../assets/images/images";

type portfolioViewReviewType = {
  userReview: any;
};

interface Styles {
  sortOption: React.CSSProperties;
  optionName: React.CSSProperties;
  reviewBox: React.CSSProperties;
  reviewDetail: React.CSSProperties;
  basicUserInfo: React.CSSProperties;
  IdAndScore: React.CSSProperties;
  reviewTools: React.CSSProperties;
  thumbsUpBox: React.CSSProperties;
  work: React.CSSProperties;
}

const styles: Styles = {
  sortOption: {
    display: "flex",
    flexDirection: "row",
    columnGap: "1.5rem",

    marginBottom: "1.4rem",
  },
  optionName: {
    backgroundColor: "#fff",
    border: "none",

    fontSize: "1rem",
    fontWeight: "600",
  },
  reviewBox: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    columnGap: "0.5rem",

    margin: "1.4rem 0 1.25rem 0",
  },
  reviewDetail: {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",

    width: "100%",
  },
  basicUserInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    width: "100%",
  },
  IdAndScore: {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.5rem",
  },
  reviewTools: {
    display: "flex",
    flexDirection: "row",
    columnGap: "0.85rem",
  },
  thumbsUpBox: {
    display: "flex",
    flexDirection: "column",
    rowGap: "0.3em",

    position: "relative",
    bottom: "0.1rem",
  },
  work: {
    width: "7.43rem",
    height: "7.43rem",
  },
};

const PortfolioEditReview: React.FC<portfolioViewReviewType> = ({
  userReview,
}) => {
  const [preferIsStd, setPreferAsStd] = useState(true);
  const [reviewList, setReviewList] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let sortObject: any[] = [];
    for (let ele in userReview) {
      sortObject.push([ele, userReview[ele]]);
    }
    if (preferIsStd) {
      sortObject.sort((a, b) => {
        return b[1].prefer - a[1].prefer;
      });
    } else if (!preferIsStd) {
      sortObject.sort((a, b) => {
        return new Date(b[1].date).getTime() - new Date(a[1].date).getTime();
      });
    }
    //console.log(sortObject)
    let tmpReviewList: JSX.Element[] = [];
    for (let i = 0; i < sortObject.length; i++) {
      const userName = sortObject[i][0];
      const userData = sortObject[i][1];
      tmpReviewList.push(
        <div>
          <div style={styles.reviewBox}>
            <img
              src={userData.profile}
              style={{ width: "3.1rem", height: "3.1rem" }}
              alt="profile"
            />
            <div style={styles.reviewDetail}>
              <div style={styles.basicUserInfo}>
                <div style={styles.IdAndScore}>
                  <p style={{ color: "#000", fontSize: "1rem" }}>
                    {userName}({userData.id})
                  </p>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                    }}
                  >
                    {userData.score}
                  </p>
                </div>
                <div style={styles.reviewTools}>
                  <img
                    src={images.mail}
                    style={{ width: "1.8rem", height: "1.5rem" }}
                    alt="mail"
                  />
                  <div style={styles.thumbsUpBox}>
                    <img
                      src={images.thumbsUp}
                      style={{ width: "1.5rem", height: "1.5rem" }}
                      alt="thumbsup"
                    />
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "#888",
                        fontSize: "0.75rem",
                      }}
                    >
                      {userData.prefer}
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ color: "#000", fontSize: "0.75rem" }}>
                {userData.comment}
              </div>
              <img src={userData.workImage} style={styles.work} alt="work" />
            </div>
          </div>
          <div
            style={{ width: "80%", height: "2px", backgroundColor: "black" }}
          ></div>
        </div>
      );
    }
    setReviewList(tmpReviewList);
  }, [preferIsStd]);

  return (
    <div>
      <div style={styles.sortOption}>
        <button
          style={
            preferIsStd
              ? { ...styles.optionName, color: "black" }
              : { ...styles.optionName, color: "grey" }
          }
          id="prefer"
          onClick={() => setPreferAsStd(true)}
        >
          좋아요순
        </button>
        <button
          style={
            !preferIsStd
              ? { ...styles.optionName, color: "black" }
              : { ...styles.optionName, color: "grey" }
          }
          id="updated"
          onClick={() => setPreferAsStd(false)}
        >
          최신순
        </button>
      </div>
      <div>{reviewList}</div>
    </div>
  );
};

export default PortfolioEditReview;
