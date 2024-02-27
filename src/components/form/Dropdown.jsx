import React, { useState } from 'react';
import * as S from '@Components/form/Dropdown.style';

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

function Dropdown({ disabled }) {
  const [isdrop, setIsdrop] = useState(false);
  const [selected, setSelected] = useState(OPTION_LISTS[0]);

  const handleDropdownClick = () => {
    setIsdrop(!isdrop);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsdrop(false);
  };

  return (
    <S.Dropdown onClick={handleDropdownClick}>
      <S.DropdownElement placeholder="Placeholder" disabled={disabled} $isdrop={isdrop}>
        <S.Title disabled={disabled}>{selected.title}</S.Title>
        <S.ArrowIcon src={isdrop ? '/images/icons/down-arrow.svg' : '/images/icons/up-arrow.svg'} alt="" />
      </S.DropdownElement>
      {isdrop && (
        <S.Options>
          {OPTION_LISTS.map((list) => (
            <S.Option key={list.title} onClick={() => handleOptionClick(list)}>
              {list.title}
            </S.Option>
          ))}
        </S.Options>
      )}
    </S.Dropdown>
  );
}

export default Dropdown;
