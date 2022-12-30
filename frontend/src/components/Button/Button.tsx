import * as S from '@/components/Button/Button.styles';
import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';
}

const Button = ({ color = 'primary', children, ...props }: ButtonProps) => {
  return (
    <S.Button color={color} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
