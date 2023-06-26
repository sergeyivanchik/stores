import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodos } from '@/stores/zustand';

import { Loading, Task } from '@/components';

import { TasksStyled } from './tasks.styles';

const Tasks = () => {
  const { tasks, fetchTasks, loading } = useTodos(
    (state) => ({
      tasks: state.tasks,
      loading: state.loading,
      fetchTasks: state.fetchTasks,
    }),
    shallow
  );

  useEffect(() => {
    fetchTasks();
  }, []);

  const hasLoading = loading && <Loading />;
  const hasTasks = !loading && tasks.map((t) => <Task key={t.id} {...t} />);

  return (
    <TasksStyled>
      {hasLoading}
      {hasTasks}
    </TasksStyled>
  );
};

export { Tasks };
