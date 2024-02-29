import React from 'react';
import * as S from 'pages/post/Post.style';
import BadgeImoji from '@Components/ui/Badge.imogi';

const userimg = [
  {
    id: 1,
    img: '/images/icons/completed.svg',
  },
  {
    id: 2,
    img: '/images/icons/completed.svg',
  },
  {
    id: 3,
    img: '/images/icons/completed.svg',
  },
  {
    id: 4,
    img: '/images/icons/completed.svg',
  },
];
const card = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];
function Post() {
  const console = 'zz';
  console.log(console);
  return (
    <>
      <S.Nav>
        <S.UserName>To. Ashley Kim</S.UserName>
        <S.Navservice>
          <S.Compose>
            <S.Profileimg>
              {userimg.slice(0, 3).map((item) => (
                <img key={item.id} className={`profileimg${item.id}`} src={item.img} alt="프로필이미지" />
              ))}
              <div>{`+${userimg.length - 3}`}</div>
            </S.Profileimg>
            <p>
              23
              <span>명이 작성했어요!</span>
            </p>
          </S.Compose>
          <S.Line1 />
          <BadgeImoji />
          <S.EmojiCount>
            <img src="/images/icons/arrow_down.svg" alt="이모지추천카운트" />
          </S.EmojiCount>
          <S.EmojiAddButton>
            <img src="/images/icons/smile-add.svg" alt="이모지추가" />
            추가
          </S.EmojiAddButton>
          <S.Line2 />
          <S.Shard>
            <img src="/images/icons/share.svg" alt="공유버튼" />
          </S.Shard>
        </S.Navservice>
      </S.Nav>
      <S.Section>
        <S.Wrapper>
          <div className="card">
            <div className="circle">
              <img src="/images/icons/plus.svg" alt="추가버튼" />
            </div>
          </div>
          {card.map((item) => (
            <div className="card">{item.id}</div>
          ))}
        </S.Wrapper>
      </S.Section>
    </>
  );
}
export default Post;
