import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../assets/images/images";
import LoginPage from './screens/LoginPage/LoginPage';

const styles: { [key: string]: React.CSSProperties } = {
  topBarContainer: {
    display: "flex",
    flexDirection: "row" as "row",
    alignItems: "center",
  },
  logoImage: {
    width: "4.625rem",
    height: "4.625rem",
    marginLeft: "0.94rem",
    cursor: "pointer",
  },
  searchContainer: {
    display:"flex",
    alignItems:"center",
    borderRadius: "2rem",
    border: "2px solid #000",
    width: "58rem",
    height: "2.9375rem",
    marginLeft:"2rem",
  },
  searchImage: {
    width: "2rem",
    height: "2rem",
    margin:"0 1.2rem 0 1.2rem",
  },
  inputSearchElement:{ 
    height:"90%",
    width:"80%",
    border:"none",
    borderRadius:"0 2rem 2rem 0",
    outline:"none",
    fontSize:"1.2rem",
  },
  toolBox:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    width:"30rem",
  },
  tool:{
    margin:"0 1.5rem 0 1.5rem",
    cursor:"pointer",
  },
};

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const [viewLoginModal, setViewLoginModal] = useState(false);
  const [logined, setLogined] = useState(false);
  const handleLogoClick = () => {
    navigate("/");
  };
  const handlePortfolioClick = () => {
    navigate("/portfolio/view");
  };
  const handleLoginClick = ()=>{
    setViewLoginModal(()=>true)
  };

  return (
    <div>
      {viewLoginModal && <LoginPage setViewLoginModal={setViewLoginModal}/>}
      <div style={styles.topBarContainer}>
        <img
          src={images.logo}
          style={styles.logoImage}
          alt="로고 이미지"
          onClick={handleLogoClick}
        />
        <div style={styles.searchContainer}>
          <img src={images.search} style={styles.searchImage} alt="검색" />
          <input style={styles.inputSearchElement} placeholder='Search'/>
        </div>
        <div style={styles.toolBox}>
          <span style={styles.tool} onClick={handlePortfolioClick}>
            포트폴리오
          </span>
          <span style={styles.tool}>알림</span>
          <span style={styles.tool}>쪽지</span>
          {
            logined && 
            <img
              src={images.profile}
              style={styles.profileImage}
              alt="프로필 사진"
            />
          }{
            !logined && 
            <p style={styles.tool} onClick={handleLoginClick}>LOGIN</p>
          }
        </div>
      </div>
    </div>
  );
};

export default TopBar;
