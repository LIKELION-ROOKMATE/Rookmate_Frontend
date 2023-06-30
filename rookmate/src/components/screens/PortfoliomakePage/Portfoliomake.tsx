import React from 'react';
import MakeSecondPage from './MakePages/MakeSecondPage'
import MakeProgress from './MakeProgress';

const PortfoliomakePage: React.FC = ()=>{
  
  return(
    <div>
    <MakeProgress/>
    <MakeSecondPage/>
    </div>
  );
}

export default PortfoliomakePage;