import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../../assets/images/images";
interface Styles {
  loginContainer: React.CSSProperties;
  loginLayout: React.CSSProperties;
  imageBorder: React.CSSProperties;
  loginPart: React.CSSProperties;
  loginText: React.CSSProperties;
  findID: React.CSSProperties;
  findPW: React.CSSProperties;
  idInputContainer: React.CSSProperties;
  pwInputContainer: React.CSSProperties;
  inputText: React.CSSProperties;
  loginButtonContainer: React.CSSProperties;
  loginButton: React.CSSProperties;
  kakaoButton: React.CSSProperties;
  continueWithKakao: React.CSSProperties;
  continueWithKakaoText: React.CSSProperties;
  kakaoIcon: React.CSSProperties;
  noAccountContainer: React.CSSProperties;
}

const styles: Styles = {
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  loginLayout: {
    display: "flex",
    flexDirection: "row",
  },
  imageBorder: {
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  loginPart: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: 350,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
  },
  loginText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "0.8rem",
    marginBottom: "0.4rem",
  },
  findID: {
    fontSize: "0.5rem",
    marginLeft: "7.2rem",
    cursor: "pointer",
  },
  findPW: {
    fontSize: "0.5rem",
    marginLeft: "0.62rem",
    cursor: "pointer",
  },
  idInputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "14.4rem",
    marginTop: "0.2rem",
  },
  pwInputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "14.4rem",
    marginTop: "0.75rem",
  },
  inputText: {
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#000",
    height: "1.8rem",
    paddingLeft: "0.5rem",
  },
  loginButtonContainer: {
    display: "flex",
    marginTop: "0.75rem",
  },
  loginButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "14.4rem",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#000",
    height: "2rem",
    backgroundColor: "#ECECEC",
  },
  noAccountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "1rem 0 1rem 0",
  },
  kakaoButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "14.4rem",
    backgroundColor: "#FEE500",
    borderRadius: 10,
    height: "2rem",
  },
  continueWithKakao: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  kakaoIcon: {
    display: "flex",
    width: 18,
    height: 18,
  },
  continueWithKakaoText: {
    marginLeft: "0.8rem",
    fontSize: "0.9rem",
  },
};

const LoginPage: React.FC = (): ReactElement => {
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    navigate("/signup/1");
  };
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginLayout}>
        <img
          src={images.loginImage}
          style={styles.imageBorder}
          alt="회원가입 사진"
        />
        <div style={styles.loginPart}>
          <img
            src={images.logoResize}
            alt="로고 사진"
            style={{
              width: "9.2rem",
              height: "10.2rem",
              paddingBottom: "2rem",
            }}
          />
          <div style={styles.loginText}>
            <h6 style={styles.findID}>아이디 찾기</h6>
            <h6 style={styles.findPW}>비밀번호 찾기</h6>
          </div>
          <div style={styles.idInputContainer}>
            <input
              type="text"
              id="id"
              placeholder="Email"
              style={styles.inputText}
            />
          </div>
          <div style={styles.pwInputContainer}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              style={styles.inputText}
            />
            <div style={styles.loginButtonContainer}>
              <div style={styles.loginButton}>
                <span style={{ fontSize: "0.9rem", cursor: "pointer" }}>
                  로그인
                </span>
              </div>
            </div>
          </div>
          <div>
            <div style={styles.noAccountContainer}>
              <span style={{ color: "gray", fontSize: "0.7rem" }}>
                아직 계정이 없다면?
              </span>
              <span
                style={{
                  marginLeft: "0.35rem",
                  fontSize: "0.7rem",
                  cursor: "pointer",
                }}
                onClick={handleSignUpClick}
              >
                회원가입 {">"}
              </span>
            </div>
            <div style={styles.kakaoButton}>
              <div style={styles.continueWithKakao}>
                <img
                  src={images.kakaoIcon}
                  alt="카카오 로고"
                  style={styles.kakaoIcon}
                />
                <span style={styles.continueWithKakaoText}>
                  카카오로 계속하기
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
