import { FC } from 'react';
//zustand
// import { shallow } from 'zustand/shallow';
//mobx
import { observer } from 'mobx-react-lite';
//redux
import { useSelector } from 'react-redux';

//zustand
// import { useFilters } from '@/stores/zustand';
//mobx
// import Store from '@/stores/mobx/store';
//redux
import { useActions } from '@/hooks';
import { getFilter } from '@/stores/redux';

import { IFilterProps } from './filter.types';

import { FilterStyled, CountStyled } from './filter.styles';

const Filter: FC<IFilterProps> = observer(({ title, type, count }) => {
  //zustand
  // const { filter, changeFilter } = useFilters(
  //   (state) => ({
  //     filter: state.filter,
  //     changeFilter: state.changeFilter,
  //   }),
  //   shallow
  // );

  //mobx
  // const { filter, changeFilter } = Store;

  //redux
  const filter = useSelector(getFilter);
  const { changeFilter } = useActions();

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
});

export { Filter };
