import React from 'react';

import { Label } from './styles';

import { Props } from './InputTypes';

export const Input: React.FC<Props> = ({
  name,
  type = 'text',
  color = '#7159c1',
  value,
  setValue,
  placeholder,
  icon,
}) => {
  return (
    <Label htmlFor={name} color={color} icon={icon}>
      <input
        name={name}
        type={type}
        aria-label={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      {icon && icon}
    </Label>
  );
};
