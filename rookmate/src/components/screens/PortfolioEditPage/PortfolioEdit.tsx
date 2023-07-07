/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./PortfolioEdit.css";
import { images } from "../../../assets/images/images";
import TopBar from "../../TopBar";
import PortfolioEditTimeline from "./components/portfolioEditTimeline";
import PortfolioEditProfile from "./components/portfolioEditProfile";
import PortfolioEditContent from "./components/portfolioEditContent";
import AddWorkModal from "./components/addWorkModal";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const styles: { [key: string]: React.CSSProperties } = {
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
    height: "1rem",
    fontSize: "0.7rem",
    marginRight: "5%",
    overflowWrap: "break-word",
  },
  proficiencyBox: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "60%",
    height: "1.1rem",
    margin: "0 0 1rem 0",
    fontSize: "1rem",
  },
  page: {
    width: "100%",
    maxWidth: "100vw",
    minHeight: "65rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    bottom: "0%",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    zIndex: "100",
  },
  portfolioDetail: {
    display: "flex",
    flexDirection: "row",
    width: "94.9rem",
    height: "73.8%",
  },
};

const initialStack: { ability: string | null; mastery: number }[] = [
  { ability: null, mastery: 50 },
  { ability: null, mastery: 50 },
  { ability: null, mastery: 50 },
  { ability: null, mastery: 50 },
  { ability: null, mastery: 50 },
];
const PortfolioEdit: React.FC = () => {
  //사용자 기본 정보 관련 state
  const [userInfo, setUserInfo] = useState({
    name: "undefined",
    age: 0,
    college: "undefined",
    departure: "undefined",
  });
  const [profileImage, setProfileImage]: any = useState(images.noneProfile);
  const [mainImage, setMainImage] = useState(images.portfolioMainImage);
  const [snsId, setSnsId] = useState({
    git: undefined,
    instagram: undefined,
    twitter: undefined,
  });
  const [cookies, setCookie] = useCookies([
    "userId",
    "accessToken",
    "refreshToken",
    "portfolioId",
  ]);

  //기술 스택 관련 state
  const [stacks, setStack] = useState<any[]>([]);
  const [inputStacks, setInputStack] =
    useState<{ ability: string | null; mastery: number }[]>(initialStack);
  //요소들의 표시 여부를 나타내는 state
  const [viewList, setViewList] = useState({
    stack: true,
    timeline: true,
    license: true,
    sns: true,
    competition: true,
  });
  const [modalActive, setModalActive] = useState(false);
  const [workImageList, setWorkImageList] = useState<any>([]);
  const navigate = useNavigate();

  const inputEvent = (e: any) => {
    e.target.style.background =
      "linear-gradient(to right, #7FA3C5 0%, #7FA3C5 " +
      e.target.value +
      "%, rgb(236, 236, 236) " +
      e.target.value +
      "%, rgb(236, 236, 236) 100%)";

    let updatedStack = initialStack;
    const parent = e.target.parentNode;
    const keyNumber: number = Number(parent.id); //inputStack에 저장할 번호
    const ability: string = parent.childNodes[0].value; //기술명 입력받는 input 태그
    const mastery = parent.childNodes[1].value; //입력값
    if (!ability) return false;
    updatedStack[keyNumber] = { ability: ability, mastery: mastery };
    console.log(updatedStack);
    setInputStack(() => updatedStack);
  };
  // 사용자의 기본 정보를 입력받는 effect
  useEffect(() => {
    //사용자 기본 정보
    axios
      .get(`http://127.0.0.1:8000/users/${cookies.userId}/`)
      .then((res) => {
        const prevUserData = res.data;
        const userAge =
          new Date().getFullYear() -
          new Date(prevUserData.birth_date).getFullYear() +
          1;
        setUserInfo(() => ({
          name: prevUserData.name,
          age: userAge,
          college: prevUserData.univ,
          departure: prevUserData.major,
        }));
      })
      .catch((err) => {
        console.log("cant get userInfo");
        console.log(err);
      });
    if (cookies.portfolioId) {
      //portfolio 기본 정보 갖고오기
      axios
        .get("http://127.0.0.1:8000/portfolios/", {
          headers: { Authorization: `Bearer ${cookies.accessToken}` },
        })
        .then((res) => {
          const prev = res.data[0];
          console.log(prev);
          setSnsId(() => ({
            git: prev.git,
            instagram: prev.instagram,
            twitter: prev.twitter,
          }));
        })
        .catch((err) => {
          console.log(err);
        });
      //portfolio 기술 스택 정보 갖고오기
      axios
        .get(
          `http://127.0.0.1:8000/portfolios/${cookies.portfolioId}/portfolio_abilities/`,
          {
            headers: { Authorization: `Bearer ${cookies.accessToken}` },
          }
        )
        .then((res) => {
          const prev = res.data;
          for (let i = 0; i < 5; i++) {
            if (!res.data.length) break;
            const ability = res.data.length < 5 ? prev[i].ability : "none";
            const mastery = res.data.length < 5 ? prev[i].mastery : 0;
            if (!ability || !mastery) continue;
            setInputStack((prev) => [
              ...prev,
              { ability: ability, mastery: mastery },
            ]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //portfolio 작업물 리스트 갖고옴.
      axios
        .get(`http://127.0.0.1:8000/portfolios/${cookies.portfolioId}/works/`, {
          headers: { Authorization: `Bearer ${cookies.accessToken}` },
        })
        .then((res) => {
          setWorkImageList(() => []);
          const resData = res.data;
          for (let element = 0; element < resData.length; element++) {
            const workData = resData[element].images[0].image;
            setWorkImageList((prev: any) => [...prev, workData]);
          }
        })
        .catch((err) => {
          console.log("err while get works");
          console.log(err);
        });
    }
    const initialStack: any = [];
    for (let i = 0; i < 5; i++) {
      initialStack.push(
        <div style={styles.stackBox} key={String(i)} id={String(i)}>
          <input
            style={styles.stackName}
            placeholder={"기술 입력"}
            onChange={inputEvent}
          />
          <input
            type="range"
            min="1"
            max="100"
            onInput={inputEvent}
            style={styles.proficiencyBox}
          />
        </div>
      );
    }
    setStack(initialStack);
  }, []);
  // toolBox 버튼을 누르면 해당 요소 활성화/비활성화하는 이벤트
  const checkViewListEvent = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const idName: keyof typeof viewList = e.currentTarget
      .id as keyof typeof viewList;
    console.log(idName);
    const value: boolean = viewList[idName] ? false : true;
    setViewList((prev: typeof viewList) => ({ ...prev, [idName]: value }));
    console.log(viewList.stack);
  };
  // 모달의 표시 여부를 결정하는 이벤트
  const setModalEvent = (e: any) => {
    const target = e.target as HTMLElement;
    if (target.id === "modal") {
      setModalActive(false);
    }
  };
  // 기술 스택을 저장하는 함수
  const saveSkillStack = (uuid: any) => {
    console.log(saveSkillStack);
    axios
      .get(`http://127.0.0.1:8000/portfolios/${uuid}/portfolio_abilities/`, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then(async (res) => {
        //array
        const data = res.data;
        console.log(data);
        const length = data.length;
        for (let i = 0; i < length; i++) {
          if (i < 5 && length >= 5) {
            const skillId = data[i].uuid;
            const ability = inputStacks[i].ability;
            const mastery = inputStacks[i].mastery;
            if (!skillId || !ability) continue;
            await axios.patch(
              `http://127.0.0.1:8000/portfolios/${uuid}/portfolio_abilities/${skillId}`,
              {
                ability: ability,
                mastery: mastery,
              },
              {
                headers: { Authorization: `Bearer ${cookies.accessToken}` },
              }
            );
          } else if (i >= 5 && length >= 5) {
            const skillId = data[i].uuid;
            if (!skillId) continue;
            await axios.delete(
              `http://127.0.0.1:8000/portfolios/${uuid}/portfolio_abilities/${skillId}`,
              {
                headers: { Authorization: `Bearer ${cookies.accessToken}` },
              }
            );
          } else if (i < 5 && length < 5) {
            const ability = inputStacks[i].ability;
            const mastery = inputStacks[i].mastery;
            if (!ability) continue;
            await axios.post(
              `http://127.0.0.1:8000/portfolios/${uuid}/portfolio_abilities/`,
              {
                ability: ability,
                mastery: mastery,
              },
              {
                headers: { Authorization: `Bearer ${cookies.accessToken}` },
              }
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 사용자가 선택한 이미지를 저장하는 함수
  const saveWorkImage = async (uuid: any) => {
    const formData = new FormData();
    const length = workImageList.length > 6 ? 6 : workImageList.length;
    for (let e = 0; e < length; e++) {
      if (!workImageList[e] || typeof workImageList[e].file != "object")
        continue;
      console.log(workImageList[e]);
      formData.append("image", workImageList[e].file);
      formData.append("field", workImageList[e].field);
      formData.append("description", workImageList[e].description);
      await axios
        .post(`http://127.0.0.1:8000/portfolios/${uuid}/works/`, formData, {
          headers: { Authorization: `Bearer ${cookies.accessToken}` },
        })
        .then((res) => {
          console.log("work image success!");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // 수정 사항 저장 후 view 페이지로 이동
  const completeEditEvent = () => {
    const data = {
      git: snsId.git,
      instagram: snsId.instagram,
      twitter: snsId.twitter,
    };
    if (!cookies.portfolioId) {
      console.log("create portfolio");
      let uuid;
      axios
        .post(`http://127.0.0.1:8000/portfolios/`, data, {
          headers: { Authorization: `Bearer ${cookies.accessToken}` },
        })
        .then(async (res) => {
          setCookie("portfolioId", res.data.uuid, { path: "/" });
          console.log("uuid : " + res.data.uuid);
          await saveSkillStack(res.data.uuid);
          await saveWorkImage(res.data.uuid);
          navigate("/portfolio/view");
        })
        .catch((err) => {
          console.log("create fail");
          console.log(err);
        });
    } else if (cookies.portfolioId) {
      console.log("edit portfolio");
      console.log(cookies.portfolioId);
      axios
        .patch(
          `http://127.0.0.1:8000/portfolios/${cookies.portfolioId}/`,
          data,
          {
            headers: { Authorization: `Bearer ${cookies.accessToken}` },
          }
        )
        .then(async (res) => {
          console.log("edit success");
          await saveSkillStack(cookies.portfolioId);
          await saveWorkImage(cookies.portfolioId);
          navigate("/portfolio/view");
        })
        .catch((err) => {
          console.log("edit fail");
          console.log(err);
        });
    }
  };
  return (
    <div style={styles.page}>
      <TopBar />
      {modalActive && (
        <div style={styles.modal} onClick={setModalEvent} id="modal">
          <AddWorkModal
            setWorkImageList={setWorkImageList}
            setModalActive={setModalActive}
          />
        </div>
      )}
      <PortfolioEditTimeline
        viewList={viewList}
        mainImage={mainImage}
        setMainImage={setMainImage}
      />
      <div style={styles.portfolioDetail}>
        <PortfolioEditProfile
          props={{
            profileImage: profileImage,
            name: userInfo.name,
            age: userInfo.age,
            collage: userInfo.college,
            departure: userInfo.departure,
            viewList: viewList,
            stacks: stacks,
            setInputStack: setInputStack,
            setSnsId: setSnsId,
          }}
          setProfileImage={setProfileImage}
        />
        <PortfolioEditContent
          props={{
            profileImage: profileImage,
            viewList: viewList,
            stacks: stacks,
          }}
          checkViewListEvent={checkViewListEvent}
          setModalActive={setModalActive}
          setWorkImageList={setWorkImageList}
          completeEditEvent={completeEditEvent}
          workImageList={workImageList}
        />
      </div>
    </div>
  );
};

export default PortfolioEdit;
