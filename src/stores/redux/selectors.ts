import { createSelector } from '@reduxjs/toolkit';

import { EFilters } from '@/enums';
import { TStore } from './store';

const getTasks = (state: TStore) => state.tasks.data;
const getCompletedTasks = (state: TStore) =>
  state.tasks.data.filter(({ completed }) => completed);
const getUncompletedTasks = (state: TStore) =>
  state.tasks.data.filter(({ completed }) => !completed);
const getLoading = (state: TStore) => state.tasks.loading;
const getFilter = (state: TStore) => state.tasks.filter;
const getValue = (state: TStore) => state.tasks.value;
const getError = (state: TStore) => state.tasks.error;

const getFilteredTasks = createSelector(
  [getFilter, getTasks],
  (filter, tasks) => {
    switch (filter) {
      case EFilters.completed:
        return tasks.filter(({ completed }) => completed);
      case EFilters.uncompleted:
        return tasks.filter(({ completed }) => !completed);
      default:
        return tasks;
    }
  }
);

export {
  getFilteredTasks,
  getLoading,
  getFilter,
  getUncompletedTasks,
  getCompletedTasks,
  getTasks,
  getValue,
  getError,
};
