import React, { useRef, useState } from 'react';
import axios from 'axios';
import './UploadPhoto.css';

//component - 이미지 첨부 컴포넌트
function PostingUpload({ setAllState, allState }) {
  //첨부된 이미지 저장 state
  const [showImages, setShowImages] = useState([]);
  // const formData = new FormData();

  const postPostPhoto = async (e) => {
    console.log('postPostPhoto:', e.target.files[0]);
    const files = e.target.files;
    const formData = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   formData.append('photo', showImages[i]);
    //   console.log(showImages[i]);
    // }
    formData.append('photo', files[0]);

    let photos = allState.photoURLs; //응답받은 photo url 배열로 담기

    await axios({
      method: 'POST',
      url: 'http://api.cpp.co.kr:3300/posts/photo',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
      .then((res) => {
        photos.push(res.data.photoURL);
        setAllState({
          ...allState,
          photoURLs: photos,
        });
      })
      .catch((err) => console.log(err));
  };
  console.log('photo', allState);

  //이미지 업로드 수 10개로 제한 (이미지 상대 경로 저장)
  const handleAddImages = (e) => {
    const imageLists = e.target.files;
    console.log('imageList : ', imageLists);
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
  };

  const inputImgBtn = useRef();

  const onClickImgUpload = () => {
    inputImgBtn.current.click();
  };

  return (
    <div className="postingUpload">
      <div className="uploadImgContainer">
        {showImages.map((image, id) => (
          <img
            className="uploadImg"
            key={id}
            src={image}
            alt={`${image}+${id}`}
          />
        ))}
      </div>

      <div className="addUpload" onClick={onClickImgUpload}>
        <label htmlFor="input-file" onChange={handleAddImages}>
          <div className="btnStart">
            <img
              src={`${process.env.PUBLIC_URL}/image/plus.png`}
              alt="btnStart"
            />
          </div>
          <input
            ref={inputImgBtn}
            type="file"
            multiple
            className="addImgsInput"
            accept="image/jpg, image/png, image/jpeg"
            onChange={postPostPhoto} //axios post
          />
        </label>
      </div>
    </div>
  );
}

export default PostingUpload;
