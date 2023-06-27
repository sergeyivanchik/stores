import { useEffect } from 'react';
//zustand
// import { shallow } from 'zustand/shallow';
//mobx
import { observer } from 'mobx-react-lite';

//zustand
// import { useFilters, useTodos } from '@/stores/zustand';
//mobx
import Store from '@/stores/mobx/store';

//zustand
// import { EFilters } from '@/enums';

import { Empty, Loading, Task } from '@/components';

import { FiltersStyled, TasksStyled } from './tasks.styles';

const Tasks = observer(() => {
  //zustand
  // const { filter } = useFilters((state) => ({ filter: state.filter }), shallow);
  //zustand
  // const { fetchTasks, loading } = useTodos(
  //   (state) => ({
  //     loading: state.loading,
  //     fetchTasks: state.fetchTasks,
  //   }),
  //   shallow
  // );
  //zustand
  // const tasks = useTodos((state) => {
  //   switch (filter) {
  //     case EFilters.completed:
  //       return state.tasks.filter(({ completed }) => completed);
  //     case EFilters.uncompleted:
  //       return state.tasks.filter(({ completed }) => !completed);
  //     default:
  //       return state.tasks;
  //   }
  // }, shallow);

  //mobx
  const { fetchTasks, loading, currentTasks: tasks } = Store;

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
});

export { Tasks };
