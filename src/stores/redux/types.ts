import { ITask } from '@/types';
import { EFilters } from '@/enums';

interface ITasksState {
  data: ITask[];
  loading: boolean;
  filter: EFilters;
  value: string;
  error: string;
}

export { ITasksState };
