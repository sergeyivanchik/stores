import { FC } from 'react';

import { IButtonProps } from './button.types';

import { ButtonStyled, TitleStyled } from './button.styles';

const Button: FC<IButtonProps> = ({ title, onClick, children, className }) => {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      <TitleStyled>{title}</TitleStyled>
      {children}
    </ButtonStyled>
  );
};

export { Button };
