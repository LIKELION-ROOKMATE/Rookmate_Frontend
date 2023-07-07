import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../TopBar";
import moduleStyle from "./ModuleStyle.module.css";

interface Styles {
  signupForm: React.CSSProperties;
  inputBox: React.CSSProperties;
  useInfoinputElement: React.CSSProperties;
  toolBox: React.CSSProperties;
  submitButton: React.CSSProperties;
}

const styles: Styles = {
  signupForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    height: "84%",
  },
  inputBox: {
    display: "flex",
    alignItems: "center",
    width: "33%",
    minWidth: "30rem",
    height: "3rem",
    borderRadius: "0.7rem",
    border: "0.05rem solid #000",
    paddingLeft: "0.8rem",
  },
  useInfoinputElement: {
    marginRight: "0.8rem",
    border: "none",
    fontSize: "1rem",
    outline: "none",
  },
  toolBox: {
    display: "flex",
    justifyContent: "start",
    width: "31%",
  },
  submitButton: {
    width: "34%",
    minWidth: "31rem",
    height: "3.3rem",
    borderRadius: "0.7rem",
    border: "none",
    backgroundColor: "#7FA3C5",
    fontSize: "1.5rem",
    fontWeight: "900",
    color: "#fff",
    cursor: "pointer",
  },
};

const SignUp = () => {
  const navigate = useNavigate();
  const emailData = useRef<any>(null);
  const password1 = useRef<any>(null);
  const password2 = useRef<any>(null);

  const [emailPh, setEmailPh] = useState("필수정보");
  const [pwd1Ph, setPwd1Ph] = useState("필수정보");
  const [pwd2Ph, setPwd2Ph] = useState("필수정보");

  const registerUserEvent = async (e: any) => {
    e.preventDefault();
    const email = emailData.current.value as string;
    const pwd1 = password1.current.value as string;
    const pwd2 = password2.current.value as string;
    if (!email || !pwd1 || !pwd2) {
      return false;
    }
    if (pwd1 !== pwd2) {
      password2.current.value = "";
      setPwd2Ph((prev) => "입력하신 정보가 일치하지 않습니다.");
      return false;
    }

    navigate("/signup/2", {
      state: {
        email: email,
        password: pwd1,
      },
    });
  };

  return (
    <div style={{ height: "100vh" }}>
      <TopBar />
      <div style={styles.signupForm}>
        <p style={{ fontSize: "2rem", fontWeight: "700" }}>이메일로 시작하기</p>
        <div style={styles.inputBox}>
          <p style={{ width: "13%" }}>이메일 : </p>
          <input
            type="text"
            placeholder={emailPh}
            onChange={(event) => setEmailPh(event.target.value)}
            ref={emailData}
            style={{ ...styles.useInfoinputElement, width: "85%" }}
            className={moduleStyle.step1UserInfo}
          />
        </div>
        <div style={styles.inputBox}>
          <p style={{ width: "17%" }}>비밀번호 : </p>
          <input
            type="password"
            placeholder={pwd1Ph}
            onChange={(event) => setPwd1Ph(event.target.value)}
            ref={password1}
            style={{ ...styles.useInfoinputElement, width: "83%" }}
            className={moduleStyle.step1UserInfo}
          />
        </div>
        <div style={styles.inputBox}>
          <p style={{ width: "28%" }}>비밀번호 재입력 : </p>
          <input
            type="password"
            placeholder={pwd2Ph}
            ref={password2}
            style={{ ...styles.useInfoinputElement, width: "72%" }}
            className={moduleStyle.step1UserInfo}
          />
        </div>
        <button style={styles.submitButton} onClick={registerUserEvent}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
