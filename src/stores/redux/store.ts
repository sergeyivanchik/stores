import { configureStore } from '@reduxjs/toolkit';
//saga
// import createSagaMiddleware from 'redux-saga';

import { reducer as tasksReducer, actions as sagaActions } from './slice';
//saga
// import { rootSaga } from './sagas';
//thunk
import * as thunkActions from './actions';
//rtkquery
import {
  reducer as rtkqueryReducer,
  reducerPath,
  middleware as rtkqueryMiddleware,
} from './rtk-query';

//saga
// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    //rtkquery
    [reducerPath]: rtkqueryReducer,
  },
  //saga
  // middleware: (getDefault) => getDefault().concat(sagaMiddleware),
  //rtkquery
  middleware: (getDefault) => getDefault().concat(rtkqueryMiddleware),
  devTools: true,
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
