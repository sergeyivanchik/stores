import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { reducer as tasksReducer, actions } from './slice';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefault) => getDefault().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

type TStore = ReturnType<typeof store.getState>;

const allActions = {
  ...actions,
};

export { store, TStore, allActions };
