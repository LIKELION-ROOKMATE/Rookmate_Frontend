import React, {useState, useEffect} from 'react';
import TopBar from '../../TopBar';
import './OutsourcingApply.css';
import { images } from "../../../assets/images/images";
import OutsourcingInfo from './components/OutsourcingInfo'
import OutsourcingApplyOption from './components/OutsourcingApplyOption'
import OutsourcingReview from './components/OutsourcingReview'

const OutsourcingApply:React.FC = ()=>{
  return(
    <div>
      <TopBar/>
      <OutsourcingInfo/>
      <OutsourcingApplyOption/>
      <OutsourcingReview/>
    </div>
  )
}

export default OutsourcingApply;