import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/screens/MainPage/MainPage.tsx';
import LoginPage from './components/screens/LoginPage/LoginPage.tsx';
import PortfolioEdit from './components/screens/PortfolioEditPage/PortfolioEdit.tsx';
import OutsourcingApply from './components/screens/Outsourcing/OutsourcingApply.tsx';

const App = () => {
	return (
		<div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/portfolio/edit" element={<PortfolioEdit />}/>
          <Route path="/outsourcingApply" element={<OutsourcingApply />}/>
        </Routes>
      </Router>
    </div>
	);
};

export default App;