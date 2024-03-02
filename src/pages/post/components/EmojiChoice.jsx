import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react';
import { createReactions } from '../api/api';

function EmojiChoice() {
  const [choice, setChoice] = useState(null);

  const handleEmojiClick = async (emoji) => {
    try {
      const data = {
        type: 'increase',
        emoji: emoji.emoji,
      };

      const response = await createReactions(data);

      console.log('이모지 전송 성공:', choice, response);

      setChoice(emoji);
    } catch (error) {
      console.error('이모지 전송 실패:', error);
    }
  };

  return (
    <div>
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  );
}

export default EmojiChoice;
