import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Portfoliostart from './components/screens/PortfolioStartPage/portfoliostart';
import Portfoliomake from './components/screens/PortfoliomakePage/Portfoliomake';


const App = () => {
	return (
		<div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/portfolio" element={<PortfolioView/>}/>
          <Route path="/portfolio/edit" element={<PortfolioEdit/>}/>
          <Route path="/portfoliostart" element={<Portfoliostart/>}/>
          <Route path="/portfoliomake" element={<Portfoliomake/>}/>
        </Routes>
      </Router>
    </div>
	);
};
export default App;