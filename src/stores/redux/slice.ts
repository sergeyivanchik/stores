import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TASKS_SLICE } from './constants';

import { EFilters } from '@/enums';
import { ITask } from '@/types';
import { ITasksState } from './types';

const initialState: ITasksState = {
  data: [],
  loading: true,
  filter: EFilters.all,
  value: '',
  error: '',
};

const asyncActions = {
  fetchTasks: createAction(`${TASKS_SLICE}/fetchTasks`),
  deleteTask: createAction<ITask['id']>(`${TASKS_SLICE}/deleteTask`),
  createTask: createAction(`${TASKS_SLICE}/createTask`),
  changeTask: createAction<ITask['id']>(`${TASKS_SLICE}/changeTask`),
};

const tasksSlice = createSlice({
  name: TASKS_SLICE,
  initialState,
  reducers: {
    setValue: (state, { payload }: PayloadAction<ITasksState['value']>) => {
      if (!!state.error) state.error = '';
      state.value = payload;
    },
    setError: (state, { payload }: PayloadAction<ITasksState['error']>) => {
      state.error = payload;
    },
    changeFilter: (state, { payload }: PayloadAction<EFilters>) => {
      state.filter = payload;
    },
    setTasks: (state, { payload }: PayloadAction<ITask[]>) => {
      state.data = payload;
    },
    setLoading: (state, { payload }: PayloadAction<ITasksState['loading']>) => {
      state.loading = payload;
    },
  },
});

const actions = {
  ...tasksSlice.actions,
  ...asyncActions,
};
const { reducer } = tasksSlice;

export { reducer, actions };
