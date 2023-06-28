import { configureStore } from '@reduxjs/toolkit';
//saga
// import createSagaMiddleware from 'redux-saga';

import { reducer as tasksReducer, actions as sagaActions } from './slice';
//saga
// import { rootSaga } from './sagas';
//thunk
import * as thunkActions from './actions';

//saga
// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  //saga
  // middleware: (getDefault) => getDefault().concat(sagaMiddleware),
});
//saga
// sagaMiddleware.run(rootSaga);

type TStore = ReturnType<typeof store.getState>;

const allActions = {
  //saga
  ...sagaActions,
  //thunk
  ...thunkActions,
};

export { store, TStore, allActions };
