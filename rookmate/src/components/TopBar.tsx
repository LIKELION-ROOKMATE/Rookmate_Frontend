import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../assets/images/images";
import LoginPage from "./screens/LoginPage/LoginPage";
import TopBarProfileModal from "./TopBarProfileModal";
import { useCookies } from "react-cookie";
import axios from "axios";

const styles: { [key: string]: React.CSSProperties } = {
  topBarContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row" as "row",
    alignItems: "center",
  },
  logoImage: {
    width: "4.625rem",
    height: "4.625rem",
    marginLeft: "0.94rem",
    cursor: "pointer",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    borderRadius: "2rem",
    border: "2px solid #000",
    width: "58rem",
    height: "2.9375rem",
    marginLeft: "2rem",
  },
  searchImage: {
    width: "2rem",
    height: "2rem",
    margin: "0 1.2rem 0 1.2rem",
  },
  inputSearchElement: {
    height: "90%",
    width: "80%",
    border: "none",
    borderRadius: "0 2rem 2rem 0",
    outline: "none",
    fontSize: "1.2rem",
  },
  toolBox: {
    display: "flex",
    alignItems: "center",
  },
  tool: {
    margin: "0 1.5rem 0 1.5rem",
    cursor: "pointer",
    height: "100%",
  },
  profileTools: {
    position: "relative",
  },
  profileImage: {
    width: "3rem",
    height: "3rem",
    margin: "0 1.5rem 0 1.5rem",
    cursor: "pointer",
  },
};

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const [viewLoginModal, setViewLoginModal] = useState(false);
  const [viewProfileModal, setViewProfileModal] = useState(false);
  const [logined, setLogined] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([
    "userId",
    "accessToken",
    "portfolioId",
  ]);
  const handleLogoClick = () => {
    navigate("/");
  };
  // 포트폴리오 페이지 이동 버튼
  const handlePortfolioClick = () => {
    //로그인 여부에 따라서 적절한 수행
    if (cookies.accessToken) {
      axios
        .get("http://127.0.0.1:8000/portfolios/", {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.data.length === 0) {
            navigate("/portfolio/start");
          } else {
            // portfolioId 추출 후 적절한 view 페이지로 이동
            axios
              .get("http://127.0.0.1:8000/portfolios/", {
                headers: { Authorization: `Bearer ${cookies.accessToken}` },
              })
              .then((res) => {
                setCookie("portfolioId", res.data[0].uuid, { path: "/" });
                navigate("/portfolio/view");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    } else {
      alert("로그인 후 사용 가능한 서비스입니다.");
      setViewLoginModal(() => true);
    }
  };
  // 로그인 처리 버튼 이벤트
  const handleLoginClick = () => {
    setViewLoginModal(() => true);
  };
  // 로그인/로그아웃 처리
  useEffect(() => {
    if (cookies.accessToken) setLogined(() => true);
    else setLogined(() => false);
  }, [cookies.accessToken]);

  return (
    <div>
      {viewLoginModal && <LoginPage setViewLoginModal={setViewLoginModal} />}
      <div style={styles.topBarContainer}>
        <img
          src={images.logo}
          style={styles.logoImage}
          alt="로고 이미지"
          onClick={handleLogoClick}
        />
        <div style={styles.searchContainer}>
          <img src={images.search} style={styles.searchImage} alt="검색" />
          <input style={styles.inputSearchElement} placeholder="Search" />
        </div>
        <div style={styles.toolBox}>
          <span style={styles.tool} onClick={handlePortfolioClick}>
            포트폴리오
          </span>
          <span style={styles.tool}>알림</span>
          <span style={styles.tool}>쪽지</span>
          {logined && (
            <div style={styles.profileTools}>
              <img
                src={images.profile}
                style={styles.profileImage}
                onClick={() => {
                  setViewProfileModal((prev) => !prev);
                }}
                alt="프로필 사진"
              />
              {viewProfileModal && (
                <TopBarProfileModal
                  setViewProfileModal={setViewLoginModal}
                  removeCookie={removeCookie}
                />
              )}
            </div>
          )}
          {!logined && (
            <p style={styles.tool} onClick={handleLoginClick}>
              LOGIN
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
