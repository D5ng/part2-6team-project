import React from 'react';
import Input from '@Components/Input';
import Dropdown from '@Components/Dropdown';

function Test() {
  return (
    <div>
      <Input disabled />
      <Input />
      <Input error />
      <Dropdown disabled />
      <Dropdown />
    </div>
  );
}

export default Test;
