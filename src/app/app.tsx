import { MainLayout } from '@/layouts';

import { GlobalStyles } from './app.styles';
import { Task } from '@/components';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainLayout>
        <Task id={1} title={'123'} completed={false} />
      </MainLayout>
    </>
  );
};

export { App };
