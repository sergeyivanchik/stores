import { MainLayout } from '@/layouts';

import { Form, Tasks } from '@/modules';

import { ContainerStyled, GlobalStyles } from './app.styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Form />
        <ContainerStyled>
          <Tasks />
        </ContainerStyled>
      </MainLayout>
    </>
  );
};

export { App };
