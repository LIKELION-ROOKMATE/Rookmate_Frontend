import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/screens/MainPage/MainPage";
import LoginPage from "./components/screens/LoginPage/LoginPage";
import PortfoliostartPage from "./components/screens/PortfolioStartPage/Portfoliostart";
import PortfoliomakePage from "./components/screens/PortfoliomakePage/Portfoliomake";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/portfolio/start" element={<PortfoliostartPage />} />
          <Route path="/portfolio/make" element={<PortfoliomakePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
