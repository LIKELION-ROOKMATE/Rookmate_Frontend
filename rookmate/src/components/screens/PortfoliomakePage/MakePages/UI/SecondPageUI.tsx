import React, {useState} from 'react';
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
            <div className='UI_imgframe'>
              <img src={images.MakeImage1} alt=""/>
            </div>
          </div>
          </li>
          <li className="slideitem">
            <div>
              <div className='UI_imgframe'>
                <img src={images.basictemplateimg2} alt=""/>
              </div>
            </div>
          </li>
          <li className="slideitem">
            <div>
              <div className='UI_imgframe'>
                <img src={images.basictemplateimg3} alt=""/>
              </div>
            </div>
          </li>
          <li className="slideitem">
            <div>
              <div className='UI_imgframe'>
                <img src={images.basictemplateimg4} alt=""/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
  
}

export default SecondPageUI