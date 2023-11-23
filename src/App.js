import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import './FontStyle.css';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Join from './pages/Join/Join';
import Policy from './component/Join/Policy';
import Login from './component/Login/LoginModal';
import Main from './pages/Main/Main';
import MapList from './component/KakaoMap/MapList';
import Mypage from './pages/Mypage/Mypage';
import ProfileModify from './pages/Mypage/ProfileModify';
import UserDrop from './pages/Mypage/UserDrop';
import PostPage from './pages/Post/PostPage';
import Posting from './pages/Post/Posting';
import OtherPost from './component/Post/OtherPost';

const AllFont = styled.div`
  font-family: 'PreR';
`;
const VisibleArea = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 85px;
  /* background-color: pink; */
`;
function App() {
  return (
    <BrowserRouter>
      <Reset />
      <AllFont>
        <Header />
        <VisibleArea>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/modify" element={<ProfileModify />} />
            <Route path="/userdrop" element={<UserDrop />} />
            <Route path="/posting" element={<Posting />} />
            <Route path="/map" element={<MapList />} />
          </Routes>
        </VisibleArea>
        <Footer />
      </AllFont>
    </BrowserRouter>
  );
}

export default App;
