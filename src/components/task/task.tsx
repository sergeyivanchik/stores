import { FC } from 'react';

import { ITaskProps } from './task.types';

import { BasketStyled, TaskStyled, TitleStyled } from './task.styles';
import { Checkbox } from '@/components/task/components';

const Task: FC<ITaskProps> = ({ completed, title }) => {
  return (
    <TaskStyled>
      <Checkbox onClick={() => console.log(1)} checked={completed} />
      <TitleStyled>{title}</TitleStyled>
      <BasketStyled />
    </TaskStyled>
  );
};

export { Task };
