import { MainLayout } from '@/layouts';

import { Form } from '@/modules';

import { GlobalStyles } from './app.styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Form />
      </MainLayout>
    </>
  );
};

export { App };
