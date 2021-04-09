import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { MdSearch } from 'react-icons/md';

import { Input } from '.';

storiesOf('Input', module)
  .add('Default', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="input-name"
        placeholder="Type Here 🙋‍♀️..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  })
  .add('With Icon', () => {
    const [inputValue, setInputValue] = useState('');

    return (
      <Input
        name="input-name"
        icon={<MdSearch />}
        placeholder="Type Here 🙋‍♀️..."
        value={inputValue}
        setValue={setInputValue}
      />
    );
  });
