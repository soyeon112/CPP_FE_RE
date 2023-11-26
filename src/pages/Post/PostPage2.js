import React, { useState, useLayoutEffect } from 'react';

// import './PostPage.css';
import { useParams } from 'react-router-dom';
import { PostWrap, StarRateWrap } from './compo/styled';
//1126 컴포넌트 분리
import PostPhotoSlider from './compo/PostPhotoSlider';
import PostCafeInfo from './compo/PostCafeInfo';
import PostStarRate from './compo/PostStarRate';
import PostTexts from './compo/PostTexts';
import OtherPost from '../../component/Post/OtherPost';

import dummy from '../../storeDummy.json';

//page - 게시물 조회 페이지 test
function PostPage() {
  const params = useParams();
  const [storeData, setStoreData] = useState();

  const getData = () => {
    dummy.map((store) => {
      if (store.id === Number(params.id)) {
        setStoreData(store);
        console.log(storeData);
      }
    });
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  const Rate = () => {
    const result = [];
    for (let item in storeData.rate) {
      console.log(item);
      console.log(storeData.rate[item]);
      result.push(<p>{storeData.rate[item]}</p>);
    }
    return result;
  };

  if (storeData != undefined) {
    return (
      <div>
        <PostWrap>
          <PostPhotoSlider {...storeData} />
          <PostCafeInfo {...storeData} />
          <StarRateWrap>
            {console.log(storeData.rate)}
            {Rate()}
          </StarRateWrap>
          {/* <div className="bar" /> */}
          {/* <PostTexts /> */}
          {/* <div className="visitDate">
            <p>방문일 : </p>
            <p className="date">2023.02.02</p>
          </div>
          <div className="bar" /> */}
        </PostWrap>
        {/* <div>
          <OtherPost />
        </div> */}
      </div>
    );
  }
}

export default PostPage;
