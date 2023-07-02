import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/screens/MainPage/MainPage";
import LoginPage from "./components/screens/LoginPage/LoginPage";
import SignUp1 from './components/screens/SignUpPage/SignUpStep1';
import SignUp2 from './components/screens/SignUpPage/SignUpStep2'; 
import PortfoliostartPage from "./components/screens/PortfolioStartPage/Portfoliostart";
import PortfoliomakePage from "./components/screens/PortfoliomakePage/MakePages/MakeSecondPage";
import PortfolioEdit from "./components/screens/PortfolioEditPage/PortfolioEdit";
import PortfolioView from './components/screens/PortfolioViewPage/PortfolioView';
import OutsourcingApply from "./components/screens/Outsourcing/OutsourcingApply";
import OutsourcingRecruitment from "./components/screens/Outsourcing/OutsourcingRecruitment/OutsourcingRecruitment";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup/1" element={<SignUp1/>}/>
          <Route path="/signup/2" element={<SignUp2/>}/>
          <Route path="/portfolio/start" element={<PortfoliostartPage />} />
          <Route path="/portfolio/make" element={<PortfoliomakePage />} />
          <Route path="/portfolio/edit" element={<PortfolioEdit />} />
          <Route path="/portfolio/view" element={<PortfolioView />} />
          <Route path="/outsourcingApply" element={<OutsourcingApply />} />
          <Route path="/outsourcing/recruitment" element={<OutsourcingRecruitment />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
