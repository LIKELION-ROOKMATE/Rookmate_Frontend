import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/screens/MainPage/MainPage';
import LoginPage from './components/screens/LoginPage/LoginPage';

const App = () => {
	return (
		<div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
	);
};

export default App;