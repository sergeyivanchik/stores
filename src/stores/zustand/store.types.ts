import { ITask } from '@/types';

interface ITodoStore {
  tasks: ITask[];
  loading: boolean;
  fetchTasks: () => void;
  deleteTask: (id: ITask['id']) => void;
  changeTask: (id: ITask['id']) => void;
  createTask: (title: ITask['title']) => void;
}

export { ITodoStore };
