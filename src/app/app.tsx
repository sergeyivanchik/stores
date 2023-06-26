import { MainLayout } from '@/layouts';

import { Form, Tasks } from '@/modules';

import { GlobalStyles } from './app.styles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Form />
        <Tasks />
      </MainLayout>
    </>
  );
};

export { App };
