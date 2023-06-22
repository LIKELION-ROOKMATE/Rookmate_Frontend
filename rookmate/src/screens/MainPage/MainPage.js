import React, {useState} from 'react';
import ReactDropdown from 'react-dropdown';
import "../MainPage/MainPage.css"

const MainPage = () => {
const [button, setButton] = useState(false);

console.log(button)
  return (
    <div id='mainPage'>
      <h1>React App!</h1>
      <p>This is the main page of my app.</p>
      <button onClick={()=>setButton(true)}></button>
    </div>
  );
};

export default MainPage;