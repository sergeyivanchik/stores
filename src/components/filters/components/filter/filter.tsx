import { FC } from 'react';
//zustand
import { shallow } from 'zustand/shallow';

//zustand
import { useFilters } from '@/stores/zustand';

import { IFilterProps } from './filter.types';

import { FilterStyled, CountStyled } from './filter.styles';

const Filter: FC<IFilterProps> = ({ title, type, count }) => {
  //zustand
  const { filter, changeFilter } = useFilters(
    (state) => ({
      filter: state.filter,
      changeFilter: state.changeFilter,
    }),
    shallow
  );

  const handleClick = () => {
    changeFilter(type);
  };

  const hasActiveMode = filter === type ? 'active' : undefined;

  return (
    <FilterStyled modifiers={hasActiveMode} onClick={handleClick}>
      <span>{title}</span>
      <CountStyled>{count}</CountStyled>
    </FilterStyled>
  );
};

export { Filter };
