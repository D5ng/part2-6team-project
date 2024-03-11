import EmojiPicker from 'emoji-picker-react';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PaperHeaderContext } from '@Components/PaperHeader/context/PaperHeaderContext';
import createReactions from '@Pages/paper/api';

function ReactionModal() {
  const { updateEmoji } = useContext(PaperHeaderContext);
  const { recipientsId } = useParams();
  const [isRequesting, setIsRequesting] = useState(false);
  const [lastClickTime, setLastClickTime] = useState(0);

  const handleEmojiClick = async (emoji) => {
    const currentTime = Date.now();
    if (isRequesting || currentTime - lastClickTime < 400) return;

    setIsRequesting(true);
    setLastClickTime(currentTime);
    try {
      const data = {
        type: 'increase',
        emoji: emoji.emoji,
      };

      await createReactions(recipientsId, data);
      updateEmoji(emoji.emoji);
      console.log('Clicked!');
    } catch (error) {
      console.error('이모지 전송 실패:', error);
    } finally {
      setIsRequesting(false);
    }
  };

  return <EmojiPicker style={{ zIndex: '9999' }} onEmojiClick={handleEmojiClick} />;
}

export default ReactionModal;
