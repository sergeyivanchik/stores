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

export { ITodoStore, IFiltersStore };
