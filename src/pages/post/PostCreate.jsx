import React, { useEffect, useState } from 'react';
import * as S from 'pages/post/PostCreate.style';
import OutlinedEmojiBtn from '@Components/ui/OutlinedEmojiBtn';
import OutlinedShareBtn from '@Components/ui/OutlinedShareBtn';
import { fetchApi } from './api/api';
import EmojiCountBtn from './components/EmojiCountBtn';

function PostCreate() {
  const [recipient, setRecipient] = useState(null);

  useEffect(() => {
    const fetchUserImg = async () => {
      try {
        const data = await fetchApi();
        setRecipient(data);
      } catch (error) {
        throw new Error('error');
      }
    };
    fetchUserImg();
  }, []);

  return (
    <S.Nav>
      <S.UserName>{`to ${recipient?.name}`}</S.UserName>
      <S.Navservice>
        <S.Compose>
          <S.Profileimg>
            {recipient?.recentMessages?.map((item, index) => (
              <img key={item.id} className={`profileimg-${index}`} src={item?.profileImageURL} alt="프로필이미지" />
            ))}
            <div>{`+${(recipient?.messageCount || 0) - 3}`}</div>
          </S.Profileimg>
          <p>
            {recipient?.messageCount}
            <span>명이 작성했어요!</span>
          </p>
        </S.Compose>
        <S.Line1 />
        <S.BadgeContainer>
          {recipient?.topReactions?.map((item) => (
            <S.BadgeBox>
              <p>
                {item.emoji}
                <span>{item.count}</span>
              </p>
            </S.BadgeBox>
          ))}
        </S.BadgeContainer>
        <EmojiCountBtn />
        <OutlinedEmojiBtn />
        <S.Line2 />
        <OutlinedShareBtn />
      </S.Navservice>
    </S.Nav>
  );
}
export default PostCreate;
