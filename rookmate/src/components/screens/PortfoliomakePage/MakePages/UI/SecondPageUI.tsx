import React from 'react';
import { images } from "../../../../../assets/images/images";
import './SecondPageUI.css'

const SecondPageUI = () => {
  return (
    <div className='Univ2'>
      <div className="slidebox">
        <input type="radio" name="slide" id="slide01" checked/>
        <input type="radio" name="slide" id="slide02"/>
        <input type="radio" name="slide" id="slide03"/>
        <input type="radio" name="slide" id="slide04"/>
        <ul className="slidelist">
          <li className="slideitem">
          <div>
            <div>
              <img src={images.MakeImage1} alt=""/>
            </div>
          </div>
          </li>
          <li className="slideitem">
            <div>
              <div>
                <img src={images.MakeImage2} alt=""/>
              </div>
            </div>
          </li>
          <li className="slideitem">
            <div>
              <div>
              <img src={images.MakeImage1} alt=""/>
              </div>
            </div>
          </li>
          <li className="slideitem">
            <div>
              <div>
              <img src={images.MakeImage2} alt=""/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
  
}

export default SecondPageUI