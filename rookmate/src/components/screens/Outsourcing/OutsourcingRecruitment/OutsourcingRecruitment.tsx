import React, {useState} from 'react'
import { images } from "../../../../assets/images/images";
import './OutsourcingRecruitment.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";

const OutsourcingRecruitment = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    promotion_text: '',
    editable_count: 0,
    work_date: '',
    price: 0,
    outsourcing_method:'',
  })

  //checkbox
  const [original_file_provided, setOriginal] = useState(false);
  const [commercial_use_allowed, setCommercial] = useState(false);
  const [additional_modification_allowed, setAdditional] = useState(false);
  const [reprocessing_allowed, setReprocessing] = useState(false);
  const [price_change_allowed, setPricechange] = useState(false);
  const [dropdown, setDropdown] = useState('')

  const [cookies, setCookie, removeCookie] = useCookies(["userId", "accessToken", "refreshToken"])

  const drop = (e:any) => {
    setDropdown(e.target.value)
  }

  const original = () => {
    setOriginal(true)
  }
  const commercial = () => {
    setCommercial(true)
  }
  const additional = () => {
    setAdditional(true)
  }
  const reprocessing = () => {
    setReprocessing(true)
  }
  const priceChange = () => {
    setPricechange(true)
  }


  const handleChange = (e:any) => {
    setValues({
      ...values, [e.target.name]: e.target.value,
    })
  }



  const handleSubmint = (e:any) => {
    e.preventDefault();
    axios.get('http://127.0.0.1:8000/portfolios/',{
      headers:{Authorization: `Bearer ${cookies.accessToken}`
    }}).then((res)=>{
      const port = res.data[0]
      axios.post(`http://127.0.0.1:8000/portfolios/${port.uuid}/outsourcings/`, {...values, original_file_provided:original_file_provided, commercial_use_allowed:commercial_use_allowed, additional_modification_allowed:additional_modification_allowed, reprocessing_allowed:reprocessing_allowed, price_change_allowed:price_change_allowed, field:dropdown}, {
      headers:{Authorization: `Bearer ${cookies.accessToken}`
    }}).then((res)=>{
      console.log(res)
      return(navigate("/"))
    }).catch((err)=>{
      console.log('1')
      console.log(err);
    })
    }).catch((err)=>{
      console.log('2')
      console.log(err);
    })
    
  }

  return (
    <div>
      <form onSubmit={handleSubmint} className='recruit'>
        <h2>외주 모집하기</h2>
        <div className='r_imgframe'>
          <img src={images.logoResize} alt="RookMate" />
        </div>
        <div className='r_write'>
          <h3>외주 작성</h3>
          <div>
            <input onChange={handleChange} id='r_title' name='title' placeholder='  제목을 입력해주세요.' type="text" />
          </div>
          <div>
            <select onClick={drop} name="field" id="r_subject">
              <option value="0">프론트앤드</option>
              <option value="1">홈페이지</option>
              <option value="2">어플리케이션</option>
              <option value="3">게임 개발</option>
              <option value="4">백앤드</option>
              <option value="5">데이터베이스</option>
              <option value="6">웹+모바일 디자인</option>
              <option value="7">시각디자인</option>
              <option value="8">로고, 브랜드 디자인</option>
              <option value="9">페키지 디자인</option>
              <option value="10">제품 디자인</option>
              <option value="11">건축 디자인</option>
              <option value="12">실내 디자인</option>
              <option value="13">전시 + 무대 디자인</option>
              <option value="14">의류 디자인</option>
              <option value="15">쥬얼리 디자인</option>
              <option value="16">페브릭 디자인</option>
              <option value="17">산업 디자인</option>
              <option value="18">영상, 기획 디자인</option>
              <option value="19">모션 그래픽</option>
              <option value="20">파인아트</option>
            </select>
          </div>
          <div>
            <textarea onChange={handleChange} name='promotion_text' placeholder='외주에 대한 홍보글을 작성해주세요. (최대 1000자)' id='r_content'/>
          </div>
        </div>
        <hr />
        <div className='r_option'>
          <h3>작업 옵션</h3>
          <h5>외주 받을 시 가능 여부를 체크해주세요.</h5>
          <p>작업분야에 따라 작업옵션이 달라집니다.</p>
          <div className='r_option_check'>
            <div className='option1'>
              <label><input onClick={original} type="checkbox" name='r_options' value='1'/>  원본파일 제공</label>
              <label><input onClick={commercial} type="checkbox" name='r_options' value='2'/>  상업적 이용</label>
            </div>
            <div className='option2'>
              <label><input onClick={additional} type="checkbox" name='r_options' value='3'/>  추가수정</label>
              <label><input onClick={reprocessing} type="checkbox" name='r_options' value='4'/>  재가공</label>
            </div>
          </div>
          <div>
            <input onChange={handleChange} name='editable_count' id='r_revise' placeholder='  수정가능횟수 :' min={0} max={5} type="number" />
            <input onChange={handleChange} name='work_date' id='r_workday' placeholder='  작업일 :' type="number" />
          </div>
          <div>
            <input onChange={handleChange} name='outsourcing_method' id='r_workway' placeholder='  작업방식 :' type="text" />
          </div>
        </div>
        <hr />
        <div className='r_price'>
          <h3>가격 설정</h3>
          <div>
            <input onChange={handleChange} name='price' id='r_hopeprice' placeholder='  희망 가격:' type="number" />
          </div>
          <div className='r_price_container'>
            <div>
              <h4>가격 상세 옵션</h4>
              <div id='r_price_box'>
                <label>  <input onClick={priceChange} type="checkbox" name='prices' value='5'/>  가격 변동 가능 여부</label>
                <label>  <input type="checkbox" name='prices' value='6'/>  최소금액 활성화하기</label>
              </div>
            </div>
            <div className='r_ul'>
              <ul>
                <li>가격 변동 활성화는 작업 따라 가격이 바뀔 수 있음을 고지하는 것입니다.</li>
                <li>상세옵션은 외주관리에서 변경이 가능합니다.</li>
                <li>시세에 맞지 않는 과한 가격으로 설정할시 제재될 수 있습니다. ex.100원, 80만원</li>
              </ul>
            </div>
          </div>
        </div>
        <button type='submit'>완료</button>
      </form>
    </div>
  )
}

export default OutsourcingRecruitment