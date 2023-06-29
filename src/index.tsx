import ReactDOM from 'react-dom/client';
//redux
// import { Provider as ReduxProvider } from 'react-redux';

//redux
// import { store } from '@/stores/redux';

import { App } from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  //redux
  // <ReduxProvider store={store}>
  <App />
  // </ReduxProvider>
);
