import { FC } from 'react';
//zustand
// import { shallow } from 'zustand/shallow';
//mobx
import { observer } from 'mobx-react-lite';

//zustand
// import { useTodos } from '@/stores/zustand';
//mobx
// import Store from '@/stores/mobx/store';
//redux
import { useActions } from '@/hooks';

import { ITaskProps } from './task.types';

import { Checkbox } from './components';

import { BasketStyled, TaskStyled, TitleStyled } from './task.styles';

const Task: FC<ITaskProps> = observer(({ completed, title, id }) => {
  //zustand
  // const { deleteTask, changeTask } = useTodos(
  //   (state) => ({
  //     deleteTask: state.deleteTask,
  //     changeTask: state.changeTask,
  //   }),
  //   shallow
  // );

  //mobx
  // const { deleteTask, changeTask } = Store;

  //redux
  const { deleteTask, changeTask } = useActions();

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
});

export { Task };
