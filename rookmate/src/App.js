import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/screens/MainPage/MainPage';
import LoginPage from './components/screens/LoginPage/LoginPage';
import PortfolioEdit from './components/screens/PortfolioEditPage/PortfolioEdit';

const App = () => {
	return (
		<div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/portfolio/edit" element={<PortfolioEdit/>}/>
        </Routes>
      </Router>
    </div>
	);
};

export default App;