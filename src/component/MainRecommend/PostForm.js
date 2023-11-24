import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecommendItem = styled.div`
  width: 100%;
  /* height: auto; */
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    width: 95%;
  }
  @media (max-width: 820px) {
  }
  @media (max-width: 500px) {
  }
`;

const RecoImg = styled.div`
  /* width: 185px; */
  /* height: 280px; */
  width: 95%;
  height: 280px;
  /* background-color: pink; */
  background-image: url(${(props) => props.bgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  border-radius: 10px;
  border: none;
  &.hover {
    opacity: 0.7;
  }
`;

const InnerUserInfo = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 12px 0 5px 5px;
  align-items: center;
`;

const InnerProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 30px;
`;

const InnerNickname = styled.p`
  margin: 8px 0 0 20px;
  font-size: 1rem;
`;

const PostForm = (props) => {
  const clickedPostID = (e) => {
    console.log('id', props.key);
  };

  return (
    <RecommendItem>
      <Link to={`/post/${props.postId}`} onClick={clickedPostID}>
        <RecoImg bgUrl={`${props.photoURL}`} />
      </Link>
      <InnerUserInfo>
        <InnerProfile src={`${props.profileURL}`} />
        <InnerNickname>{props.nickname}</InnerNickname>
      </InnerUserInfo>
    </RecommendItem>
  );
};

export default PostForm;
