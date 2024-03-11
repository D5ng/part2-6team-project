import EmojiPicker from 'emoji-picker-react';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PaperHeaderContext } from '@Components/PaperHeader/context/PaperHeaderContext';
import createReactions from '@Pages/paper/api';

function ReactionModal() {
  const { updateEmoji } = useContext(PaperHeaderContext);
  const { recipientsId } = useParams();
  let timeout = 0;

  const handleEmojiClick = async (emoji) => {
    if (timeout) return;

    timeout = setTimeout(async () => {
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
    }, 300);
  };

  return <EmojiPicker style={{ zIndex: '9999' }} onEmojiClick={handleEmojiClick} />;
}

export default ReactionModal;
