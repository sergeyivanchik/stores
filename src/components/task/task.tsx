import { FC } from 'react';
//zustand
import { shallow } from 'zustand/shallow';

//zustand
import { useTodos } from '@/stores/zustand';

import { ITaskProps } from './task.types';

import { Checkbox } from './components';

import { BasketStyled, TaskStyled, TitleStyled } from './task.styles';

const Task: FC<ITaskProps> = ({ completed, title, id }) => {
  //zustand
  const { deleteTask, changeTask } = useTodos(
    (state) => ({
      deleteTask: state.deleteTask,
      changeTask: state.changeTask,
    }),
    shallow
  );

  const handleDelete = () => {
    deleteTask(id);
  };
  const handleChange = () => {
    changeTask(id);
  };

  const hasCompletedMode = completed ? 'completed' : undefined;

  return (
    <TaskStyled>
      <Checkbox onClick={handleChange} checked={completed} />
      <TitleStyled modifiers={hasCompletedMode}>{title}</TitleStyled>
      <BasketStyled onClick={handleDelete} />
    </TaskStyled>
  );
};

export { Task };
