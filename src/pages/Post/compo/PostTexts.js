import React from 'react';

//본문 출력
export default function PostTexts() {
  const [isShowMore, setIsShowMore] = useState(false);
  const textLimit = useRef(60);
  let comment = content;
  // console.log(props);
  if (comment === null) {
    comment = '';
  }

  const commenter = useMemo(() => {
    // 조건에 따라 게시글을 보여주는 함수

    const shortReview = comment.slice(0, textLimit.current); // 원본에서 글자 수만큼 잘라서 짧은 버전을 준비하자

    if (comment.length > textLimit.current) {
      // 원본이 길면 (원본 글자수 > 제한된 갯수)
      if (isShowMore) {
        return comment;
      } // 더보기가 true 면 원본 바로 리턴
      return shortReview; // (더보기가 false면) 짧은 버전 리턴해주자
    }
    return comment; // 그렇지않으면 (짧은 글에는) 쓴글 그대로 리턴!
  }, [isShowMore]);

  return (
    <>
      <div className="postText">{commenter}</div>
      {/* 본문 > 더보기 / 닫기 버튼 */}
      <div onClick={() => setIsShowMore(!isShowMore)} className="postText">
        {comment.length > textLimit.current &&
          (isShowMore ? (
            <p className="textClose_More">닫기</p>
          ) : (
            <p className="textClose_More">더보기</p>
          ))}
      </div>
    </>
  );
}
