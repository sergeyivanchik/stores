import { FC } from 'react';
//zustand
// import { shallow } from 'zustand/shallow';
//mobx
import { observer } from 'mobx-react-lite';
//redux
import { useSelector } from 'react-redux';

//zustand
// import { useTodos } from '@/stores/zustand';
//mobx
// import Store from '@/stores/mobx/store';
//redux
import {
  getTasks,
  getCompletedTasks,
  getUncompletedTasks,
} from '@/stores/redux';

import { EFilters } from '@/enums';
import { FiltersProps } from './filters.types';

import { Filter } from './components';

import { FiltersStyled } from './filters.styles';

const Filters: FC<FiltersProps> = observer(({ className }) => {
  //zustand
  // const { countAll, countCompleted, countUncompleted } = useTodos(
  //   (state) => ({
  //     countAll: state.tasks.length,
  //     countCompleted: state.tasks.filter(({ completed }) => completed).length,
  //     countUncompleted: state.tasks.filter(({ completed }) => !completed)
  //       .length,
  //   }),
  //   shallow
  // );

  //mobx
  // const { tasks, completedTasks, uncompletedTasks } = Store;
  // const countAll = tasks.length;
  // const countCompleted = completedTasks.length;
  // const countUncompleted = uncompletedTasks.length;

  //redux
  const countAll = useSelector(getTasks).length;
  const countCompleted = useSelector(getCompletedTasks).length;
  const countUncompleted = useSelector(getUncompletedTasks).length;

  return (
    <FiltersStyled className={className}>
      <Filter title="All" count={countAll} type={EFilters.all} />
      <Filter
        title="Completed"
        count={countCompleted}
        type={EFilters.completed}
      />
      <Filter
        title="Uncompleted"
        count={countUncompleted}
        type={EFilters.uncompleted}
      />
    </FiltersStyled>
  );
});

export { Filters };
