import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/screens/MainPage/MainPage";
import LoginPage from "./components/screens/LoginPage/LoginPage";
import PortfoliostartPage from "./components/screens/PortfolioStartPage/Portfoliostart";
import PortfoliomakePage from "./components/screens/PortfoliomakePage/Portfoliomake";
import PortfolioEdit from "./components/screens/PortfolioEditPage/PortfolioEdit";
import PortfolioView from './components/screens/PortfolioViewPage/PortfolioView';
import OutsourcingApply from "./components/screens/Outsourcing/OutsourcingApply";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/portfolio/start" element={<PortfoliostartPage />} />
          <Route path="/portfolio/make" element={<PortfoliomakePage />} />
          <Route path="/portfolio/edit" element={<PortfolioEdit />} />
          <Route path="/portfolio/view" element={<PortfolioView />} />
          <Route path="/outsourcingApply" element={<OutsourcingApply />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
