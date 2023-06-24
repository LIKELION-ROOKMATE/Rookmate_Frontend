import React from "react";
import TopBar from "../../TopBar";
import MainPageTag from "./components/MainPageTag";
import MainPageTopAd from "./components/MainPageTopAd";
// import MainPageBody from "./components/MainPageBody";

function MainPage(): React.JSX.Element {
  return (
    <div>
      <TopBar />
      <MainPageTag />
      <MainPageTopAd />
      {/* <MainPageBody /> */}
    </div>
  );
}

export default MainPage;
