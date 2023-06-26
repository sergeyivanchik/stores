import { EFilters } from '@/enums';

interface IFilterProps {
  title: string;
  count: number;
  type: EFilters;
}

interface IFilterStyledProps {
  modifiers?: 'active';
}

export { IFilterProps, IFilterStyledProps };
