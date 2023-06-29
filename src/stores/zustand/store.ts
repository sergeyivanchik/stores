import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { restApi } from '@/api';

import { ITask } from '@/types';
import { EFilters } from '@/enums';
import { IFiltersStore, IInputStore, ITodoStore } from './store.types';

const useInput = create<IInputStore>()(
  devtools((set, get) => ({
    value: '',
    error: '',
    setValue: (value) => {
      if (!!get().error) set({ error: '' });
      set({ value });
    },
    setError: (error) => {
      set({ error });
    },
  }))
);

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
    changeTask: async (task) => {
      try {
        await restApi.put(`todos/${task.id}`);

        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === task.id ? { ...t, completed: !t.completed } : t
          ),
        }));
      } catch (error) {
        console.error(error);
      }
    },
    createTask: async () => {
      const { value, setError } = useInput();

      if (!!value) {
        try {
          const { data: task } = await restApi.post<ITask>('todos', {
            title: value,
            completed: false,
          });

          set((state) => ({ tasks: [task, ...state.tasks] }));
        } catch (error) {
          console.error(error);
        }
      } else {
        setError('Please fill in the field');
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

export { useTodos, useFilters, useInput };
