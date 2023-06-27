import { ITask } from '@/types';
import { EFilters } from '@/enums';

interface ITodoStore {
  tasks: ITask[];
  loading: boolean;
  fetchTasks: () => void;
  deleteTask: (id: ITask['id']) => void;
  changeTask: (id: ITask['id']) => void;
  createTask: (title: ITask['title']) => void;
}

interface IFiltersStore {
  filter: EFilters;
  changeFilter: (value: EFilters) => void;
}

interface IInputStore {
  value: string;
  error: string;
  setValue: (value: string) => void;
  setError: (value: string) => void;
}

export { ITodoStore, IFiltersStore, IInputStore };
