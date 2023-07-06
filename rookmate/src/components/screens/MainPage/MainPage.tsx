import React,{useState} from "react";
import TopBar from "../../TopBar";
import MainPageTag from "./components/MainPageTag";
import MainPageBody from "./components/MainPageBody";
import {useCookies} from 'react-cookie'

function MainPage(): React.JSX.Element {
  const [cookies, setCookie, removeCookie] = useCookies(["userId", "accessToken", "refreshToken", "portfolioId"]);
  const [login, setLogin] = useState<boolean>(false);
  return (
    <div>
      <TopBar/>
      <MainPageTag />
      <MainPageBody />
    </div>
  );
}

export default MainPage;
