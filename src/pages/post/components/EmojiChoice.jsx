import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import createReactions from '../api/api';

function EmojiChoice() {
  const { recipientsId } = useParams();
  const handleEmojiClick = async (emoji) => {
    try {
      const data = {
        type: 'increase',
        emoji: emoji.emoji,
      };
      const response = await createReactions(recipientsId, data);

      console.log('이모지 전송 성공:', response);
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
