// eslint-ignore-file
import React, { forwardRef } from 'react';

import { Label, Radio, Mark } from './styles';

import { Props } from './RadioTypes';

const RadioWrapper = forwardRef<HTMLInputElement, Props>(
  ({ label, name, value, color = '#7159c1', ...props }: Props, ref) => {
    const { readOnly, onChange } = props;

    return (
      <Label
        onClick={
          readOnly
            ? () => {
                alert('No Function! 🥱');
              }
            : onChange
        }
        htmlFor={name}
        color={color}
      >
        {label}

        <Radio type="radio" {...props} ref={ref} name={name} value={value} />
        <Mark />
      </Label>
    );
  },
);

export { RadioWrapper as Radio };
