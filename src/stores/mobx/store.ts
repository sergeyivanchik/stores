import { makeAutoObservable } from 'mobx';

import { restApi } from '@/api';

import { ITask } from '@/types';
import { EFilters } from '@/enums';

class Store {
  tasks: ITask[] = [];
  loading: boolean = false;
  filter: EFilters = EFilters.all;
  value: string = '';
  error: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  get completedTasks() {
    return this.tasks.filter(({ completed }) => completed);
  }

  get uncompletedTasks() {
    return this.tasks.filter(({ completed }) => !completed);
  }

  get currentTasks() {
    switch (this.filter) {
      case EFilters.completed:
        return this.completedTasks;
      case EFilters.uncompleted:
        return this.uncompletedTasks;
      default:
        return this.tasks;
    }
  }

  fetchTasks = async () => {
    try {
      this.loading = true;
      const { data: tasks } = await restApi.get<ITask[]>('todos');
      this.tasks = tasks;
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
    }
  };

  deleteTask = async (id: ITask['id']) => {
    try {
      await restApi.delete(`todos/${id}`);

      this.tasks = this.tasks.filter((t) => t.id !== id);
    } catch (error) {
      console.error(error);
    }
  };

  changeTask = async (id: ITask['id']) => {
    try {
      await restApi.put(`todos/${id}`);

      this.tasks = this.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
    } catch (error) {
      console.error(error);
    }
  };

  createTask = async () => {
    if (!!this.value) {
      try {
        const { data: task } = await restApi.post<ITask>('todos', {
          title: this.value,
          completed: false,
        });

        this.tasks = [task, ...this.tasks];
        this.value = '';
      } catch (error) {
        console.error(error);
      }
    } else {
      this.setError('Please fill in the field');
    }
  };

  setValue = (value: string) => {
    if (this.error) this.error = '';
    this.value = value;
  };

  setError = (error: string) => {
    this.error = error;
  };

  changeFilter = (filter: EFilters) => {
    this.filter = filter;
  };
}

const store = new Store();

export default store;
