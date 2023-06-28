import { useEffect } from 'react';
//zustand
// import { shallow } from 'zustand/shallow';
//mobx
import { observer } from 'mobx-react-lite';
//redux
import { useSelector } from 'react-redux';

//zustand
// import { useFilters, useTodos } from '@/stores/zustand';
//mobx
// import Store from '@/stores/mobx/store';
//redux
import { getFilteredTasks, getLoading } from '@/stores/redux';
import { useActions } from '@/hooks';

//zustand
// import { EFilters } from '@/enums';

import { Empty, Loading, Task } from '@/components';

import { FiltersStyled, TasksStyled } from './tasks.styles';

const Tasks = observer(() => {
  //zustand
  // const { filter } = useFilters((state) => ({ filter: state.filter }), shallow);
  // const { fetchTasks, loading } = useTodos(
  //   (state) => ({
  //     loading: state.loading,
  //     fetchTasks: state.fetchTasks,
  //   }),
  //   shallow
  // );
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
  // const { loading, currentTasks: tasks } = Store;

  //redux
  const { fetchTasks } = useActions();
  const tasks = useSelector(getFilteredTasks);
  const loading = useSelector(getLoading);

  //redux
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
