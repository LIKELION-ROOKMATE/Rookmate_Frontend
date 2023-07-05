import React,{useState} from "react";
import TopBar from "../../TopBar";
import MainPageTag from "./components/MainPageTag";
import MainPageBody from "./components/MainPageBody";

function MainPage(): React.JSX.Element {
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
