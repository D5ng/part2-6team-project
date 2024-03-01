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

      console.log(emoji.imageUrl);
      // https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f604.png
      const response = await createReactions(data);

      console.log('이모지 전송 성공:', response);

      setChoice(emoji);
    } catch (error) {
      console.log(error);
      console.error('이모지 전송 실패:', error);
    }
  };

  console.log(choice);
  return (
    <div>
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  );
}

export default EmojiChoice;
