import React, {useState} from 'react'
import { images } from "../../../../assets/images/images";
import './OutsourcingRecruitment.css'


const OutsourcingRecruitment = () => {
  const [values, setValues] = useState({
    r_title: '',
    r_subject: '',
    r_keyword: '',
    r_content: '',
    r_revise: '',
    r_workday: '',
    r_hopeprice: '',
  })

  const handleChange = (e:any) => {
    setValues({
      ...values, [e.target.name]: e.target.value,
    })
  }

  const handleSubmint = (e:any) => {
    e.preventDefault()
    console.log(values);
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
            <input onChange={handleChange} id='r_title' name='r_title' placeholder='  제목을 입력해주세요.' type="text" />
          </div>
          <div>
            <input onChange={handleChange} id='r_subject' name='r_subject' placeholder='  작업분야:' type="text" />
            <input onChange={handleChange} id='r_keyword' name='r_keyword' placeholder='  키워드:'/>
          </div>
          <div>
            <textarea onChange={handleChange} name='r_content' placeholder='외주에 대한 홍보글을 작성해주세요. (최대 1000자)' id='r_content'/>
          </div>
        </div>
        <hr />
        <div className='r_option'>
          <h3>작업 옵션</h3>
          <h5>외주 받을 시 가능 여부를 체크해주세요.</h5>
          <p>작업분야에 따라 작업옵션이 달라집니다.</p>
          <div className='r_option_check'>
            checkbox
          </div>
          <div>
            <input onChange={handleChange} name='r_revise' id='r_revise' placeholder='  수정가능횟수 :' type="number" />
            <input onChange={handleChange} name='r_workday' id='r_workday' placeholder='  작업일 :' type="text" />
          </div>
          <div>
            <input onChange={handleChange} name='r_workway' id='r_workway' placeholder='  작업방식 :' type="text" />
          </div>
        </div>
        <hr />
        <div className='r_price'>
          <h3>가격 설정</h3>
          <div>
            <input onChange={handleChange} name='r_hopeprice' id='r_hopeprice' placeholder='  희망 가격:' type="number" />
          </div>
          <div className='r_price_container'>
            <div>
              <h4>가격 상세 옵션</h4>
              <div id='r_price_box'>checkbox</div>
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