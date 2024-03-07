import React, { useState } from 'react';
import * as S from '@Components/form/Dropdown.style';
import { useMessageFormContext } from 'pages/messageCreateForm/context/MessageFormContext';

const OPTION_LISTS = [
  {
    title: '친구',
  },
  {
    title: '지인',
  },
  {
    title: '동료',
  },
  {
    title: '가족',
  },
];

const FONT_OPTION_LIST = [
  {
    title: 'Noto Sans',
  },
  {
    title: 'Pretendard',
  },
  {
    title: '나눔명조',
  },
  {
    title: '나눔손글씨 손편지체',
  },
];
function Dropdown({ disabled, type }) {
  const Default = type === 'relation' ? OPTION_LISTS[0] : FONT_OPTION_LIST[0];
  const [isdrop, setIsdrop] = useState(false);
  const [selected, setSelected] = useState(Default);
  const { dispatch } = useMessageFormContext();
  const handleDropdownClick = () => {
    setIsdrop(!isdrop);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsdrop(false);
    // eslint-disable-next-line no-unused-expressions
    type === 'relation'
      ? dispatch({ type: 'relation', relation: option.title })
      : dispatch({ type: 'font', font: option.title });
  };

  return (
    <S.Dropdown onClick={handleDropdownClick}>
      <S.DropdownElement placeholder="Placeholder" disabled={disabled} $isdrop={isdrop}>
        <S.Title disabled={disabled}>{selected.title}</S.Title>
        <S.ArrowIcon src={isdrop ? '/images/icons/down-arrow.svg' : '/images/icons/up-arrow.svg'} alt="" />
      </S.DropdownElement>
      {isdrop && (
        <S.Options>
          {type === 'relation'
            ? OPTION_LISTS.map((list) => (
                // eslint-disable-next-line react/jsx-indent
                <S.Option key={list.title} onClick={() => handleOptionClick(list)}>
                  {list.title}
                </S.Option>
                // eslint-disable-next-line indent
              ))
            : FONT_OPTION_LIST.map((list) => (
                // eslint-disable-next-line react/jsx-indent
                <S.Option key={list.title} onClick={() => handleOptionClick(list)}>
                  {list.title}
                </S.Option>
                // eslint-disable-next-line indent
              ))}
        </S.Options>
      )}
    </S.Dropdown>
  );
}

export default Dropdown;
