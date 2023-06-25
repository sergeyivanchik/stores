import { ITask } from '@/types';

interface ITaskProps extends ITask {}

interface ITitleStyledProps {
  modifiers?: 'completed';
}

export { ITaskProps, ITitleStyledProps };
