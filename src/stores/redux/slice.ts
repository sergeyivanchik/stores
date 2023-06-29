import {
  //saga
  // createAction,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
//thunk
// import {
//   fetchTasks,
//   deleteTask,
//   changeTask,
//   createTask,
// } from '@/stores/redux/actions';

import { TASKS_SLICE } from './constants';
import { EFilters } from '@/enums';
//saga
// import { ITask } from '@/types';
import { ITasksState } from './types';

const initialState: ITasksState = {
  data: [],
  loading: true,
  filter: EFilters.all,
  value: '',
  error: '',
};

//saga
// const asyncActions = {
//   fetchTasks: createAction(`${TASKS_SLICE}/fetchTasks`),
//   deleteTask: createAction<ITask['id']>(`${TASKS_SLICE}/deleteTask`),
//   createTask: createAction(`${TASKS_SLICE}/createTask`),
//   changeTask: createAction<ITask['id']>(`${TASKS_SLICE}/changeTask`),
// };

const tasksSlice = createSlice({
  name: TASKS_SLICE,
  initialState,
  reducers: {
    setValue: (state, { payload }: PayloadAction<ITasksState['value']>) => {
      if (!!state.error) state.error = '';
      state.value = payload;
    },
    //saga && rtkquery
    setError: (state, { payload }: PayloadAction<ITasksState['error']>) => {
      state.error = payload;
    },
    changeFilter: (state, { payload }: PayloadAction<EFilters>) => {
      state.filter = payload;
    },
    //saga
    // setTasks: (state, { payload }: PayloadAction<ITask[]>) => {
    //   state.data = payload;
    // },
    //saga
    // setLoading: (state, { payload }: PayloadAction<ITasksState['loading']>) => {
    //   state.loading = payload;
    // },
  },
  //thunk
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchTasks.pending, (state) => {
  //       state.loading = true;
  //     })
  //     .addCase(fetchTasks.fulfilled, (state, { payload }) => {
  //       state.data = payload;
  //       state.loading = false;
  //     })
  //     .addCase(fetchTasks.rejected, (state) => {
  //       state.loading = false;
  //     })
  //     .addCase(deleteTask.fulfilled, (state, { payload }) => {
  //       state.data = state.data.filter(({ id }) => id !== payload);
  //     })
  //     .addCase(changeTask.fulfilled, (state, { payload }) => {
  //       state.data = state.data.map((t) =>
  //         t.id === payload ? { ...t, completed: !t.completed } : t
  //       );
  //     })
  //     .addCase(createTask.fulfilled, (state, { payload }) => {
  //       state.data = [payload, ...state.data];
  //     })
  //     .addCase(createTask.rejected, (state, { payload }) => {
  //       if (payload === 'Please fill in the field') state.error = payload;
  //     });
  // },
});

const actions = {
  ...tasksSlice.actions,
  //saga
  // ...asyncActions,
};
const { reducer } = tasksSlice;

export { reducer, actions };
