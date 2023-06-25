import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren, Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  className?: string;
  url?: string;
  onClick?: () => void;
  color?: 'Orange' | 'White';
  style?: 'Solid' | 'Outline';
  size?: 'Big' | 'Regular' | 'Small';
}
