import React, { useState } from "react";
import { images } from "../../../../assets/images/images";

const styles = {
  tagLayout: { marginLeft: "7.63rem" },
  tagContainer: {
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    padding: "0.5rem",
    marginLeft: "0.4rem",
    marginRight: "0.4rem",
  },
  tag: {
    display: "flex",
    color: "#525252",
    fontSize: "0.75rem",
    marginLeft: "0.4rem",
    padding: "0.3rem 0.5rem",
    borderRadius: 20,
    backgroundColor: "#C0D9FF",
    width: "7.4375rem",
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

const MainPageTag: React.FC = () => {
  const [tags, setTags] = useState([
    "UXUI",
    "웹사이트",
    "웹서비스",
    "웹디자인",
    "그래픽디자인",
  ]);

  const handleTagDelete = (index: number) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <div style={styles.tagLayout}>
      <div style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <span style={styles.tag} key={index}>
            {tag}
            <img
              src={images.deleteTag}
              style={styles.deleteTagImage}
              alt="삭제"
              onClick={() => handleTagDelete(index)}
            />
          </span>
        ))}
        <img src={images.addTag} style={styles.addTagImage} alt="태그 추가" />
      </div>
    </div>
  );
};

export default MainPageTag;
