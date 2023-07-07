/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import { images } from "../../../assets/images/images";
import TopBar from "../../TopBar";
import moduleStyle from "./ModuleStyle.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

interface Styles {
  signupForm: React.CSSProperties;
  inputBoxContainer: React.CSSProperties;
  inputBox: React.CSSProperties;
  inputBoxSmall: React.CSSProperties;
  inputTypeName: React.CSSProperties;
  inputUserInfoContent: React.CSSProperties;
  inputBoxMiddle: React.CSSProperties;
  majorOptions: React.CSSProperties;
  majorOptionsContent: React.CSSProperties;
  inputBoxMiddleInputPart: React.CSSProperties;
  submitButton: React.CSSProperties;
  collegeAccessBox: React.CSSProperties;
  collegeAccessExplain: React.CSSProperties;
  addCollegeInfoButton: React.CSSProperties;
  addCollegeInfoExplain: React.CSSProperties;
  formSubmitButton: React.CSSProperties;
}
const styles: Styles = {
  signupForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.3rem",

    width: "100vw",

    marginTop: "5rem",
  },
  inputBoxContainer: {
    display: "flex",
    columnGap: "1.2rem",

    width: "33%",
    minWidth: "32rem",
  },
  inputBox: {
    width: "33%",
    height: "3rem",

    borderRadius: "0.7rem",
    border: "0.05rem solid #000",
    paddingLeft: "0.8rem",
  },
  inputBoxSmall: {
    display: "flex",
    alignItems: "center",

    width: "50%",
    height: "3rem",

    border: "0.05rem solid #000",
    borderRadius: "0.8rem",
  },
  inputTypeName: {
    display: "flex",

    margin: "0 1rem 0 1rem",
  },
  inputUserInfoContent: {
    height: "95%",
    border: "none",
    outline: "none",
    marginRight: "0.8rem",
  },
  inputBoxMiddle: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    width: "33%",
    minWidth: "31.8rem",
    height: "3rem",

    border: "0.05rem solid #000",
    borderRadius: "0.8rem",
  },
  majorOptions: {
    display: "flex",
    flexDirection: "column",
    gap: "1.1rem",

    position: "absolute",
    left: "15%",
    top: "110%",

    width: "85%",

    borderRadius: "0.3rem",
    boxShadow: "2px 2px 7px 3px rgba(152,152,152,0.75)",
    padding: "1rem 0 1rem 0",

    zIndex: "1",

    backgroundColor: "#fff",
  },
  majorOptionsContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  inputBoxMiddleInputPart: {
    width: "80%",

    border: "none",
    outline: "none",
  },
  submitButton: {
    width: "33%",
    minWidth: "31.8rem",
    height: "3rem",

    borderRadius: "0.7rem",
    border: "none",

    backgroundColor: "#7FA3C5",

    fontSize: "1.5rem",
    fontWeight: "900",
    color: "#fff",

    cursor: "pointer",
  },
  collegeAccessBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    width: "66%",
    height: "28rem",

    borderRadius: "0.625rem",
    border: "0.05rem solid #000",
  },
  collegeAccessExplain: {
    display: "flex",
    flexWrap: "wrap",

    position: "relative",
    left: "0.8rem",

    width: "80%",

    marginBottom: "0.5rem",

    fontSize: "0.8rem",
    fontWeight: "400",
  },
  addCollegeInfoButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "1.5rem",

    position: "relative",
    left: "29%",

    width: "42%",
    height: "46vh",

    backgroundColor: "#D9D9D9",
    border: "none",
    marginTop: "1rem",
    marginBottom: "1.3rem",

    cursor: "pointer",
  },
  addCollegeInfoExplain: {
    marginTop: "0",
    marginBottom: "0",

    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "400",
  },
  formSubmitButton: {
    width: "10rem",
    height: "3.5rem",

    border: "none",
    borderRadius: "5rem",
    marginBottom: "3rem",
    marginTop: "1rem",

    backgroundColor: "#7FA3C5",

    fontSize: "1.7rem",
    fontWeight: "400",
    color: "#fff",

    cursor: "pointer",
  },
};
const jobList: string[] = [
  "대학생",
  "직장인",
  "프리랜서",
  "스타트업 창업가",
  "취업 준비생",
  "기타",
];
// const jobName: string[] = [
//   "student",
//   "teenager",
//   "employee",
//   "freelancer",
//   "start_up",
//   "job_seeker",
//   "etc",
// ];
const optionList: any = [
  "프론트엔드",
  "홈페이지",
  "어플리케이션",
  "게임 개발",
  "백엔드",
  "데이터베이스",
  "웹+모바일 디자인",
  "시각디자인",
  "로고, 브랜드 디자인",
  "패키지 디자인",
  "제품 디자인",
  "건축 디자인",
  "실내 디자인",
  "전시 + 무대 다지안",
  "의류 디자인",
  "쥬열리 디자인",
  "페브릭 디자인",
  "산업 디자인",
  "영상 기획, 디자인",
  "모션 그래픽",
  "파인아트",
];

const SignUp = () => {
  // 로그인 1차 페이지에서 데이터 받아옴.
  const navigate = useNavigate();
  const locaition = useLocation();
  const passedEmail = locaition.state.email as string;
  const passedPassword = locaition.state.password as string;
  const [cookies, setCookie] = useCookies([
    "userId",
    "accessToken",
    "refreshToken",
  ]);
  // 관심 분야 선택 관련 state
  const [optionElement, setOptionElement] = useState<JSX.Element[]>([]);
  const [optionListVisible, setOptionListVisible] = useState<boolean>(false);
  const [checkedItem, setCheckedItem] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [checkCount, setCheckCount] = useState<number>(0);

  // 직업 선택 관련 state
  const [jobElement, setjobElement] = useState<JSX.Element[]>([]);
  const [jobListVisible, setJobListVisible] = useState<boolean>(false);
  const [checkedJob, setCheckedJob] = useState<any>("");

  // 입력값 유효성 검사용 ref, state
  const nameRef = useRef<any>(null);
  const birthRef = useRef<any>(null);
  const phoneNumberRef = useRef<any>(null);

  const univRef = useRef<any>(null);
  const majorRef = useRef<any>(null);
  const univEmailRef = useRef<any>(null);

  const [placeholder, setPlaceholder] = useState<{ [key: string]: string }>({
    name: "",
    birth: "YYYY - MM - DD",
    phoneNumber: "",
    job: "",
  });

  // 관심 분야 선택 여부를 나타내기 위해 checkedItem을 업데이트하는 effect
  useEffect(() => {
    let updatedCheckedItem: { [key: string]: boolean } = {};
    for (let ele in optionList) {
      const optionListElement: string = optionList[ele];
      updatedCheckedItem[optionListElement] = false;
    }

    setCheckedItem(updatedCheckedItem);
  }, []);

  // 관심 분야 checkBox 클릭 시 적절한 값을 checkedItem에 저장하는 이벤트 핸들러
  // 9개 이상을 선택할 수는 없도록 지정
  // 관심 분야 선택 개수 (checkCount) 값도 적절히 설정
  const majorCheckboxOnClickEvent = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const target = e.target as any;
    const id = target.id;
    setCheckCount((prev) => {
      if (target.checked && !checkedItem[id]) {
        setCheckCount((prev) => prev + 1);
        setCheckedItem((prev) => ({ ...prev, [target.id]: true }));
      } else if (!target.checked && checkedItem[id]) {
        setCheckCount((prev) => prev - 1);
        setCheckedItem((prev) => ({ ...prev, [target.id]: false }));
      }
      if (prev >= 9 && target.checked) {
        target.checked = false;
      }
      return prev;
    });
  };

  // 관심 분야 선택창 생성 effect (선택한 관심 분야 혹은 선택창 표시 여부에 따라서 재랜더링)
  useEffect(() => {
    let tmpOptionElement: JSX.Element[] = [];
    for (let element in optionList) {
      const id = optionList[element];
      tmpOptionElement.push(
        <div style={styles.majorOptionsContent} key={optionList[element]}>
          <label
            htmlFor={optionList[element]}
            style={{ display: "flex", justifyContent: "center", width: "50%" }}
          >
            {optionList[element]}
          </label>
          <input
            type="checkbox"
            id={id}
            onClick={(e: any) => {
              majorCheckboxOnClickEvent(e);
            }}
            checked={checkedItem[id]}
            style={{ marginRight: "1rem" }}
          />
        </div>
      );
    }
    setOptionElement(tmpOptionElement);
  }, [optionListVisible, checkedItem]);

  // 직업 선택창 생성 effect (선택한 직업 혹은 선택창 표시 여부에 따라서 재랜더링)
  useEffect(() => {
    let tmpJobElement: JSX.Element[] = [];
    for (let element in jobList) {
      const id = element;
      let isChecked = false;
      if (id === checkedJob) {
        isChecked = true;
      }
      tmpJobElement.push(
        <div style={styles.majorOptionsContent} key={jobList[element]}>
          <label
            htmlFor={jobList[element]}
            style={{ display: "flex", justifyContent: "center", width: "50%" }}
          >
            {jobList[element]}
          </label>
          <input
            type="radio"
            id={id}
            name="job"
            style={{ marginRight: "1rem" }}
            onChange={(e: any) => {
              const target = e.target as any;
              setCheckedJob(target.id);
            }}
            checked={isChecked ? true : undefined}
          />
        </div>
      );
    }
    setjobElement(tmpJobElement);
  }, [jobListVisible, checkedJob]);

  const patchUserDetailInfo = (e: any) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const birth = birthRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const job = Number(checkedJob);
    let field = [];
    const univ_email = univEmailRef.current.value;
    const univ = univRef.current.value;
    const major = majorRef.current.value;
    for (let ele in checkedItem) {
      if (checkedItem[ele]) field.push(optionList.indexOf(ele));
    }
    if (
      !name ||
      !birth ||
      !phoneNumber ||
      checkCount === 0 ||
      checkedJob === ""
    ) {
      if (!name) setPlaceholder((prev) => ({ ...prev, name: "필수정보" }));
      if (!birth)
        setPlaceholder((prev) => ({
          ...prev,
          birth: "YYYY - MM - DD ( 필수정보 )",
        }));
      if (!phoneNumber)
        setPlaceholder((prev) => ({ ...prev, phoneNumber: "필수정보" }));
      if (checkedJob === "")
        setPlaceholder((prev) => ({ ...prev, job: "직업 선택 필수" }));
      console.log("signup failed : empty input");
      return false;
    }
    const detailData = {
      name: name,
      phone_number: phoneNumber,
      birth_date: birth,
      field: field,
      job: job,
      univ_email: univ_email,
      univ: univ,
      major: major,
    };
    console.log(detailData);
    // 사용자 회원가입 처리
    axios
      .post("http://127.0.0.1:8000/users/registration/", {
        email: passedEmail,
        password: passedPassword,
      })
      .then((res) => {
        const userId = res.data.user.uuid;
        const accessToken = res.data.token.access;
        const refreshToken = res.data.token.refresh;
        setCookie("accessToken", accessToken, { path: "/" });
        setCookie("refreshToken", refreshToken, { path: "/" });
        setCookie("userId", userId, { path: "/" });
      })
      .catch((err) => {
        console.log("signup fail : ");
        console.log(err);
        return false;
      });
    // 사용자 필수정보/추가정보 보내기
    axios
      .patch(`http://127.0.0.1:8000/users/${cookies.userId}/`, detailData, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("set detail data fail : ");
        console.log(err);
        return false;
      });
    console.log("success");
    navigate("/");
  };

  return (
    <div>
      <TopBar />
      <div style={styles.signupForm}>
        <p style={{ fontSize: "2rem", fontWeight: "700" }}>필수정보 입력</p>
        <div style={styles.inputBoxContainer}>
          <label htmlFor="name" style={styles.inputBoxSmall}>
            <p style={styles.inputTypeName}>이름 : </p>
            <input
              type="text"
              id="name"
              ref={nameRef}
              style={{ ...styles.inputUserInfoContent, width: "63%" }}
              className={moduleStyle.step2UserInfo}
              placeholder={placeholder.name}
            />
          </label>
          <label htmlFor="birth" style={styles.inputBoxSmall}>
            <p style={styles.inputTypeName}>생년월일 : </p>
            <input
              type="text"
              id="birth"
              ref={birthRef}
              style={{ ...styles.inputUserInfoContent, width: "50%" }}
              className={moduleStyle.step2UserInfo}
              placeholder={placeholder.birth}
            />
          </label>
        </div>
        <label htmlFor="phoneNumber" style={styles.inputBoxMiddle}>
          <p style={styles.inputTypeName}>핸드폰 : </p>
          <input
            type="text"
            id="phoneNumber"
            ref={phoneNumberRef}
            style={{ ...styles.inputUserInfoContent, width: "79.5%" }}
            className={moduleStyle.step2UserInfo}
            placeholder={placeholder.phoneNumber}
          />
        </label>
        <div style={styles.inputBoxMiddle} id="major">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={styles.inputTypeName} id="major">
              관심분야 :
            </p>
            <ul style={{ display: "flex", flexDirection: "row" }}>
              {Object.keys(checkedItem).map((item, index) =>
                checkedItem[item] && index < 2 ? (
                  <li key={item}>
                    {item}
                    {index !== checkCount - 1 && <span>, &nbsp;</span>}
                  </li>
                ) : null
              )}
              {Object.keys(checkedItem).filter(
                (item, index) => checkedItem[item] && index >= 2
              ).length > 0 && (
                <li>
                  <span>...</span>
                </li>
              )}
            </ul>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {checkCount === 0 && (
              <p className={moduleStyle.userInfoEmpty}>1개 이상 선택 필수</p>
            )}
            {checkCount > 0 && (
              <p className={moduleStyle.userInfoEmpty}>9개까지 선택 가능</p>
            )}
            <img
              src={images.addTag}
              style={{ cursor: "pointer" }}
              onClick={(e: any) => {
                setOptionListVisible(!optionListVisible);
                setJobListVisible(false);
              }}
              alt="selectMajor"
            />
          </div>
          {optionListVisible && (
            <div style={styles.majorOptions}>{optionElement}</div>
          )}
        </div>

        <div style={styles.inputBoxMiddle} id="job">
          <p style={styles.inputTypeName}>직업 : {jobList[checkedJob]}</p>

          <div style={{ display: "flex", alignItems: "center" }}>
            {checkedJob === "" && (
              <p className={moduleStyle.userInfoEmpty}>{placeholder.job}</p>
            )}
            <img
              src={images.addTag}
              style={{ cursor: "pointer" }}
              onClick={(e: any) => {
                setOptionListVisible(false);
                setJobListVisible(!jobListVisible);
              }}
              alt="selectJob"
            />
          </div>
          {jobListVisible && (
            <div style={styles.majorOptions}>{jobElement}</div>
          )}
        </div>
        <button style={styles.submitButton} onClick={patchUserDetailInfo}>
          회원가입
        </button>

        <div
          style={{
            width: "80%",
            height: "0.1rem",
            backgroundColor: "#000",
            marginTop: "7rem",
          }}
        ></div>

        <p style={{ fontSize: "2rem", fontWeight: "700" }}>
          대학교 등록하기 (선택)
        </p>
        <div style={{ ...styles.inputBoxContainer, width: "66%" }}>
          <label htmlFor="schoolName" style={styles.inputBoxSmall}>
            <p style={styles.inputTypeName}>대학교 : </p>
            <input
              type="text"
              id="schoolName"
              ref={univRef}
              style={{
                width: "55%",
                height: "95%",
                border: "none",
                outline: "none",
                marginRight: "0.8rem",
                fontSize: "1rem",
              }}
            />
          </label>
          <label htmlFor="major" style={styles.inputBoxSmall}>
            <p style={styles.inputTypeName}>전공 : </p>
            <input
              type="text"
              id="major"
              ref={majorRef}
              style={{
                width: "55%",
                height: "95%",
                border: "none",
                outline: "none",
                marginRight: "0.8rem",
              }}
            />
          </label>
        </div>
        <div style={styles.inputBoxMiddle}>
          <p style={styles.inputTypeName}>대학 이메일 : </p>
          <input
            type="text"
            ref={univEmailRef}
            style={{
              width: "72%",
              height: "95%",
              border: "none",
              outline: "none",
              marginRight: "0.8rem",
            }}
          />
        </div>
        <button style={styles.formSubmitButton} onClick={patchUserDetailInfo}>
          완료
        </button>
      </div>
    </div>
  );
};

export default SignUp;
