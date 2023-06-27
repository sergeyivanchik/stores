import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { useFilters, useTodos } from '@/stores/zustand';

import { EFilters } from '@/enums';

import { Empty, Loading, Task } from '@/components';

import { FiltersStyled, TasksStyled } from './tasks.styles';

const Tasks = () => {
  const { filter } = useFilters((state) => ({ filter: state.filter }), shallow);
  const { fetchTasks, loading } = useTodos(
    (state) => ({
      loading: state.loading,
      fetchTasks: state.fetchTasks,
    }),
    shallow
  );
  const tasks = useTodos((state) => {
    switch (filter) {
      case EFilters.completed:
        return state.tasks.filter(({ completed }) => completed);
      case EFilters.uncompleted:
        return state.tasks.filter(({ completed }) => !completed);
      default:
        return state.tasks;
    }
  }, shallow);

  useEffect(() => {
    fetchTasks();
  }, []);

  const hasLoading = loading && <Loading />;
  const hasTasks =
    !loading && !!tasks.length && tasks.map((t) => <Task key={t.id} {...t} />);
  const hasEmpty = !loading && !tasks.length && <Empty />;

  return (
    <TasksStyled>
      <FiltersStyled />
      {hasLoading}
      {hasTasks}
      {hasEmpty}
    </TasksStyled>
  );
};

export { Tasks };
