import React, { useState } from "react";
import { images } from "../../../../assets/images/images";
import AddTagModal from './addTagModal';

const styles:{[key:string]:React.CSSProperties} = {
  tagLayout: { marginLeft: "7.63rem" },
  tagContainer: {
    display: "flex",
    alignItems: "start",
    flexWrap:"wrap",
    gap:"0.5rem",
    width:"90%",
    borderRadius: "2rem",
    padding: "0.5rem",
    marginLeft: "0.4rem",
    marginRight: "0.4rem",
  },
  tag: {
    display: "flex",
    columnGap:"1rem",
    color: "#525252",
    fontSize: "0.75rem",
    marginLeft: "0.4rem",
    padding: "0.3rem 0.5rem",
    borderRadius: 20,
    backgroundColor: "#C0D9FF",
    height: "2.25rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  deleteTagImage: {
    cursor: "pointer",
  },
  addTagImage: {
    marginLeft: "1.1rem",
    cursor: "pointer",
  },
};

const tags = [
"프론트엔드",
"홈페이지",
"어플리케이션",
"게임 개발",
"백엔드",
"데이터베이스",
"웹+모바일 디자인",
"시각디자인",
"로고, 브랜드 디자인",
"패키지 디자인",
"제품 디자인",
"건축 디자인",
"실내 디자인",
"전시 + 무대 다지안",
"의류 디자인",
"쥬열리 디자인",
"페브릭 디자인",
"산업 디자인",
"영상 기획, 디자인",
"모션 그래픽",
"파인아트",
]

const MainPageTag: React.FC = () => {
  const [tagModalVisible, setTagModalVisible] = useState<boolean>(false);
  const [addedTag, setAddedTag] = useState([]);

  const handleTagDelete = (index: number) => {
    const updatedTags = [...addedTag];
    updatedTags.splice(index, 1);
    setAddedTag(updatedTags);
  };

  const handleTagAdd = ()=>{
    setTagModalVisible(()=>true);
  }

  return (
    <div>
      {tagModalVisible &&
        <AddTagModal 
          setTagModalVisible={setTagModalVisible}
          props={{
            tags:tags,
            addedTag:addedTag,
            setAddedTag:setAddedTag,
          }} 
        />}
      <div style={styles.tagLayout}>
        <div style={styles.tagContainer}>
          <div style={styles.tagContainer}>
            {addedTag.map((tag, index) => (
              <span style={styles.tag} key={index}>
                <p style={{marginLeft:"0.5rem",}}>{tag}</p>
                <img
                  src={images.deleteTag}
                  style={styles.deleteTagImage}
                  alt="삭제"
                  onClick={() => handleTagDelete(index)}
                />
              </span>
            ))}
          </div>
          <img src={images.addTag} style={styles.addTagImage} alt="태그 추가" onClick={handleTagAdd}/>
        </div>
      </div>
    </div>
  );
};

export default MainPageTag;
