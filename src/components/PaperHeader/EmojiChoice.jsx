import EmojiPicker from 'emoji-picker-react';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PaperHeaderContext } from '@Components/PaperHeader/context/PaperHeaderContext';
import createReactions from '@Pages/paper/api';

function EmojiChoice() {
  const { updateEmoji } = useContext(PaperHeaderContext);

  const { recipientsId } = useParams();
  const handleEmojiClick = async (emoji) => {
    try {
      const data = {
        type: 'increase',
        emoji: emoji.emoji,
      };

      await createReactions(recipientsId, data);
      updateEmoji(emoji.emoji);
    } catch (error) {
      console.error('이모지 전송 실패:', error);
    }
  };

  return (
    <div>
      <EmojiPicker style={{ zIndex: '9999' }} onEmojiClick={handleEmojiClick} />
    </div>
  );
}

export default EmojiChoice;
