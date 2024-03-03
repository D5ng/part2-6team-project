import React from 'react';
import * as S from '@Components/paperCard/PaperCard.style';
import AddCardButton from '@Components/paperCard/AddCardButton';

function ReactionButton({ list }) {
  return (
    <S.ReactionButton>
      <S.ReactionButtonWrapper>
        {list.topReactions.map((reaction) => (
          <AddCardButton key={reaction.id} icon={reaction.emoji} initialCount={reaction.count} />
        ))}
      </S.ReactionButtonWrapper>
    </S.ReactionButton>
  );
}

export default ReactionButton;
