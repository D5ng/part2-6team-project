import React from 'react';
import * as S from '@Components/messageCard/MessageCard.style';
import { BadgeRelationship } from '@Components/ui/BadgeRelationship';

function MessageProfile({ data }) {
  const { sender, profileImageURL, relationship } = data;
  return (
    <S.MessageProfile>
      <S.ProfileImg src={profileImageURL} alt="profileImg" />
      <S.ProfileContent>
        <S.ProfileName>
          From. <span>{sender}</span>
        </S.ProfileName>
        <BadgeRelationship relationship={relationship}>{relationship.name}</BadgeRelationship>
      </S.ProfileContent>
    </S.MessageProfile>
  );
}

export default MessageProfile;
