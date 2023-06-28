import { createAsyncThunk } from '@reduxjs/toolkit';

import { restApi } from '@/api';
import { ITask } from '@/types';
import { TStore } from '@/stores/redux/store';

const fetchTasks = createAsyncThunk<ITask[]>(
  'tasks/fetchTasks',
  async (_, thunkAPI) => {
    try {
      const { data: tasks } = await restApi.get<ITask[]>('todos');

      return tasks;
    } catch (error) {
      console.error(error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

const deleteTask = createAsyncThunk<number, ITask['id']>(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      await restApi.delete(`todos/${id}`);

      return id;
    } catch (error) {
      console.error(error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

const changeTask = createAsyncThunk<ITask['id'], ITask['id']>(
  'tasks/changeTask',
  async (id, thunkAPI) => {
    try {
      await restApi.put(`todos/${id}`);

      return id;
    } catch (error) {
      console.error(error);

      return thunkAPI.rejectWithValue(error);
    }
  }
);

const createTask = createAsyncThunk<ITask>(
  'tasks/createTask',
  async (_, thunkAPI) => {
    const {
      tasks: { value },
    } = thunkAPI.getState() as TStore;

    if (!!value) {
      try {
        const { data: task } = await restApi.post<ITask>('todos', {
          title: value,
          completed: false,
        });

        return task;
      } catch (error) {
        console.error(error);

        return thunkAPI.rejectWithValue(error);
      }
    } else {
      return thunkAPI.rejectWithValue('Please fill in the field');
    }
  }
);

export { fetchTasks, deleteTask, changeTask, createTask };
