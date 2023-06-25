import { FC } from 'react';

import { ICheckboxProps } from './checkbox.types';

import { CheckboxStyled } from './checkbox.styles';

const Checkbox: FC<ICheckboxProps> = ({ checked, onClick }) => {
  const hasUncheckedMode = !checked ? 'unchecked' : undefined;

  return <CheckboxStyled onClick={onClick} modifiers={hasUncheckedMode} />;
};

export { Checkbox };
