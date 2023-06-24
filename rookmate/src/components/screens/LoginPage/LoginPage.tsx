import React, { ReactElement } from "react";
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
  imageBorder: { borderTopLeftRadius: 30, borderBottomLeftRadius: 30 },
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
    height: 35,
    marginTop: "0.81rem",
  },
  findID: {
    fontSize: "0.5rem",
    marginLeft: "5.8rem",
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
};
const LoginPage: React.FC = (): ReactElement => {
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginLayout}>
        <img
          src={images.loginImage}
          style={styles.imageBorder}
          alt="회원가입 사진"
        />
        <div style={styles.loginPart}>
          <img src={images.logo} alt="로고 사진" />
          <div style={styles.loginText}>
            <h3>로그인</h3>
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
                <h6>로그인</h6>
              </div>
            </div>
          </div>
          <div>
            <h6 style={{ display: "flex", marginTop: 20, marginBottom: 11 }}>
              아직 계정이 없다면?
            </h6>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "14.4rem",
                backgroundColor: "#FEE500",
                borderRadius: 10,
                height: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={images.kakao} />
                <h6
                  style={{
                    display: "flex",
                    marginLeft: "0.8rem",
                  }}
                >
                  카카오로 계속하기
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
