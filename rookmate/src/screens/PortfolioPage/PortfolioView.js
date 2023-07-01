import React, {useState} from 'react';
import '../PortfolioView.css';

const PortfolioView = ()=>{
  return(
    <div>
      <div className="img-timeline-box">
        <img src="img/main img.png" alt="main-img" className="main-img"/>
        <div className = 'timeline'>
          <div className="timeline-element">
            <p className="point"></p>
            <p className="content">rookmate</p>
          </div>
        </div>
      </div>
    </div>
  );
}