import { FC } from 'react';

import { ReactComponent as EmptyIcon } from '@/assets/icons/empty.svg';

import { IEmptyProps } from './empty.types';

import { EmptyStyled, TitleStyled } from './empty.styles';

const Empty: FC<IEmptyProps> = ({ title = 'Nothing found' }) => {
  return (
    <EmptyStyled>
      <EmptyIcon />
      <TitleStyled>{title}</TitleStyled>
    </EmptyStyled>
  );
};

export { Empty };
