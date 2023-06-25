import { FC, PropsWithChildren } from 'react';

import { Header } from '@/components';

import {
  MainLayoutStyled,
  WrapperStyled,
  ContainerStyled,
} from './main-layout.styles';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MainLayoutStyled>
      <Header />
      <WrapperStyled>
        <ContainerStyled>{children}</ContainerStyled>
      </WrapperStyled>
    </MainLayoutStyled>
  );
};

export { MainLayout };
