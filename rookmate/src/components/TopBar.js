import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import search from '../assets/images/search.png';
import profile from '../assets/images/profile.png'

const styles = {
  topBarContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoImage: {
    width: '4.625rem',
    height: '4.625rem',
    marginLeft:'0.94rem',
    cursor: 'pointer',
  },
  searchContainer: {
    borderRadius: '30px',
    border: '2px solid #000',
    width: '58rem',
    height: '2.9375rem',
    marginTop:'1.13rem',
    marginLeft:'2.06rem'
  },
  searchImage: {
    width: '2rem',
    height: '2rem',
    marginLeft:'1.12rem',
    marginTop:'0.44rem'
  },
  portfolioMenu:{
    fontSize: '1rem',
    color: '#000',
    marginTop:'1.95rem',
    marginLeft:'2.25rem'
  },
  alertMenu:{
    fontSize: '1rem',
    color: '#000',
    marginTop:'1.88rem',
    marginLeft:'0.94rem',
    width: '4.625rem',
    textAlign:'center',
  },
  messageMenu:{
    fontSize: '1rem',
    color: '#000',
    marginTop:'1.88rem',
    marginLeft:'0.38rem',
    width: '4.625rem',
    textAlign:'center',
  },
  profileImage:{
    width: '3rem',
    height: '3rem',
    borderRadius:48,
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
    marginTop:'1.06rem',
    marginLeft:'1.44rem'
  },
};

const TopBar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };
    
  return (
    <div style={styles.topBarContainer}>
      <img src={logo} style={styles.logoImage} alt="로고 이미지" onClick={handleLogoClick} />
      <div style={styles.searchContainer}>
        <img src={search} style={styles.searchImage} alt="검색" />
      </div>
      <span style={styles.portfolioMenu}>포트폴리오</span>
      <span style={styles.alertMenu}>알림</span>
      <span style={styles.messageMenu}>쪽지</span>
      <img src={profile} style={styles.profileImage} alt="프로필 사진" />
    </div>
  );
};

export default TopBar;
