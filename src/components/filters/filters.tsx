import { FC } from 'react';
import { shallow } from 'zustand/shallow';

import { useTodos } from '@/stores/zustand';

import { EFilters } from '@/enums';
import { FiltersProps } from './filters.types';

import { Filter } from './components';

import { FiltersStyled } from './filters.styles';

const Filters: FC<FiltersProps> = ({ className }) => {
  const { countAll, countCompleted, countUncompleted } = useTodos(
    (state) => ({
      countAll: state.tasks.length,
      countCompleted: state.tasks.filter(({ completed }) => completed).length,
      countUncompleted: state.tasks.filter(({ completed }) => !completed)
        .length,
    }),
    shallow
  );

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
};

export { Filters };
