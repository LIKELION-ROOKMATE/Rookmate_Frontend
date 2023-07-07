/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ModuleCss from "../MainPage.module.css";
import { images } from "../../../../assets/images/images";

type AddTagModalType = {
  props: {
    tags: string[];
    addedTag: string[];
    setAddedTag: any;
  };
  setTagModalVisible: any;
};

const AddTagModal: React.FC<AddTagModalType> = ({
  props,
  setTagModalVisible,
}) => {
  const [searchedTag, setSearchedTag] = useState(props.tags);
  const [searchedTagElements, setSearchedTagELement] = useState<JSX.Element[]>(
    []
  );
  // const [searchBoxContent, setSearchBoxContent] = useState<string>();

  const handleTagDelete = (index: number) => {
    const updatedTags = [...props.addedTag];
    updatedTags.splice(index, 1);
    props.setAddedTag(updatedTags);
  };

  const handleAddSearchedTag = (e: any) => {
    const target = e.target;
    console.log(target);
    const id = target.id;
    if (props.addedTag.includes(id)) return false;
    props.setAddedTag((prev: string[]) => [...prev, id]);
  };

  const handleTagModalVisible = (e: any) => {
    setTagModalVisible(() => false);
  };

  const handleSearchResult = (e: any) => {
    const searchData = e.target.value;
    let updatedSearchedTag: string[] = [];
    for (let i = 0; i < props.tags.length; i++) {
      const item = props.tags[i];
      if (item.indexOf(searchData) < 0) continue;
      updatedSearchedTag.push(item);
    }
    setSearchedTag(() => [...updatedSearchedTag]);
  };

  useEffect(() => {
    let updatedTagElements: JSX.Element[] = [];
    for (let i = 0; i < searchedTag.length; i++) {
      const tag = searchedTag[i] as string;
      if (props.addedTag.includes(tag)) continue;
      updatedTagElements.push(
        <div
          className={ModuleCss.searchedTag}
          onClick={handleAddSearchedTag}
          id={tag}
        >
          <span className={ModuleCss.searchedTagName} id={tag}>
            {tag}
          </span>
        </div>
      );
    }
    setSearchedTagELement(() => [...updatedTagElements]);
  }, [searchedTag, props.addedTag]);

  return (
    <div className={ModuleCss.modalBackground}>
      <div className={ModuleCss.tagModalBox}>
        <img
          src={images.addTag}
          className={ModuleCss.tagModalExitButton}
          onClick={handleTagModalVisible}
          alt="태그 추가"
        />
        <div className={ModuleCss.tagModalTitle}>관심분야 추가하기</div>
        <div className={ModuleCss.tagManager}>
          <div className={ModuleCss.addedTagBox}>
            <p className={ModuleCss.tagModalSubTitle}>
              추가된 관심분야(최대 9개)
            </p>
            <div className={ModuleCss.addedTag}>
              {props.addedTag.map((tag, index) => (
                <div className={ModuleCss.tagBox}>
                  <span className={ModuleCss.tagName}>{tag}</span>
                  <img
                    src={images.deleteTag}
                    onClick={() => handleTagDelete(index)}
                    className={ModuleCss.deleteTagImage}
                    alt="태그 삭제"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={ModuleCss.searchAndAddTagBox}>
            <p className={ModuleCss.tagModalSubTitle}>관심분야 검색하기</p>
            <input
              placeholder="Search"
              className={ModuleCss.tagSearchBox}
              onChange={handleSearchResult}
            />
            <div className={ModuleCss.searchedTagBox}>
              {searchedTagElements}
            </div>
          </div>
        </div>
        <button
          onClick={handleTagModalVisible}
          className={ModuleCss.saveButton}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default AddTagModal;
