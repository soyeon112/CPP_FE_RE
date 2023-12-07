import React, { useState, useLayoutEffect } from 'react';

// import './PostPage.css';
import { useParams } from 'react-router-dom';
import { PostWrap, StarRateWrap } from '../../component/Post/styled';
//1126 컴포넌트 분리
import PostPhotoSlider from '../../component/Post/PostPhotoSlider';
import PostCafeInfo from '../../component/Post/PostCafeInfo';
import PostStarRate from '../../component/Post/PostStarRate';
import PostTexts from '../../component/Post/PostTexts';
import OtherPost from '../../component/Post/OtherPost';

import dummy from '../../storeDummy.json';

//page - 게시물 조회 페이지
function PostPage() {
  const params = useParams();
  const [storeData, setStoreData] = useState();

  const getData = () => {
    dummy.map((store) => {
      if (store.id === Number(params.id)) {
        setStoreData(store);
        console.log('storeData', storeData);
      }
    });
  };

  useLayoutEffect(() => {
    getData();
  }, []);

  if (storeData != undefined) {
    return (
      <>
        <PostWrap>
          <PostPhotoSlider {...storeData} />
          <PostCafeInfo {...storeData} />
          <PostStarRate {...storeData} />
          <PostTexts {...storeData} />
        </PostWrap>

        <OtherPost />
      </>
    );
  }
}

export default PostPage;
