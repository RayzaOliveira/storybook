import React, { forwardRef } from 'react';

import { Label, Box, Mark } from './styles';

import { Props } from './CheckBoxTypes';

export const CheckBox = forwardRef(
  ({ label, name, value, color = '#7159c1', ...props }: Props, ref) => {
    const { readOnly, onChange } = props;

    return (
      <Label
        onClick={
          readOnly
            ? () => {
                alert('No function! 🥱');
              }
            : onChange
        }
        htmlFor={name}
        color={color}
      >
        {label}

        <Box {...props} ref={ref} name={name} value={value} />
        <Mark />
      </Label>
    );
  },
);
