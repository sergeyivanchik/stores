import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { restApi } from '@/api';

import { ITask } from '@/types';
import { EFilters } from '@/enums';
import { IFiltersStore, IInputStore, ITodoStore } from './store.types';

const useTodos = create<ITodoStore>()(
  devtools((set) => ({
    tasks: [],
    loading: false,
    fetchTasks: async () => {
      set({ loading: true });
      try {
        const { data: tasks } = await restApi.get<ITask[]>('todos');

        set({ tasks });
      } catch (error) {
        console.error(error);
      } finally {
        set({ loading: false });
      }
    },
    deleteTask: async (id) => {
      try {
        await restApi.delete(`todos/${id}`);

        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }));
      } catch (error) {
        console.error(error);
      }
    },
    changeTask: async (id) => {
      try {
        await restApi.put(`todos/${id}`);

        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        }));
      } catch (error) {
        console.error(error);
      }
    },
    createTask: async (title) => {
      try {
        const { data: task } = await restApi.post<ITask>('todos', {
          title,
          completed: false,
        });

        set((state) => ({ tasks: [task, ...state.tasks] }));
      } catch (error) {
        console.error(error);
      }
    },
  }))
);

const useFilters = create<IFiltersStore>()(
  devtools((set) => ({
    filter: EFilters.all,
    changeFilter: (filter) => {
      set({ filter });
    },
  }))
);

const useInput = create<IInputStore>()(
  devtools((set) => ({
    value: '',
    error: '',
    setValue: (value) => {
      set({ value });
    },
    setError: (error) => {
      set({ error });
    },
  }))
);

export { useTodos, useFilters, useInput };
