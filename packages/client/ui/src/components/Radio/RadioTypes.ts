import { InputHTMLAttributes } from 'react';

export interface Props extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  label: string;
  name: string;
  value: any;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  onChange?: () => void;
}
