import React, { useContext } from 'react';
import * as S from 'pages/post/PostCreate.style';
import OutlinedEmojiBtn from '@Components/ui/OutlinedEmojiBtn';
import OutlinedShareBtn from '@Components/ui/OutlinedShareBtn';
import { PaperContext } from '@Paper/context/PaperContext';
import EmojiCountBtn from './components/EmojiCountBtn';

function PostCreate({ onUpdateEmoji, emojis, topReactions }) {
  const { paperState } = useContext(PaperContext);

  return (
    <S.Nav>
      <S.UserName>{`to ${paperState?.data?.name}`}</S.UserName>
      <S.Navservice>
        <S.Compose>
          <S.Profileimg>
            {paperState?.data?.recentMessages?.map((item, index) => (
              <img key={item.id} className={`profileimg-${index}`} src={item?.profileImageURL} alt="프로필이미지" />
            ))}
            <div>{`+${(paperState?.data?.messageCount || 0) - 3}`}</div>
          </S.Profileimg>
          <p>
            {paperState?.data?.messageCount}
            <span>명이 작성했어요!</span>
          </p>
        </S.Compose>
        <S.Line1 />
        <S.BadgeContainer>
          {topReactions.length > 0 ? (
            topReactions.map((item) => (
              <S.BadgeBox key={item.id}>
                <p>
                  {item.emoji}
                  <span>{item.count}</span>
                </p>
              </S.BadgeBox>
            ))
          ) : (
            <p>이모지를 추가해주세요!</p>
          )}
        </S.BadgeContainer>
        <EmojiCountBtn emojis={emojis} />
        <OutlinedEmojiBtn onUpdateEmoji={onUpdateEmoji} />
        <S.Line2 />
        <OutlinedShareBtn />
      </S.Navservice>
    </S.Nav>
  );
}
export default PostCreate;
