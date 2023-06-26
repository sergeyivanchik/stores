import styled, { css } from 'styled-components';

import { applyStyleModifiers } from '@/utils';

import { colors } from '@/constants';

import { IFilterStyledProps } from './filter.types';

const FILTER_MODIFIERS = {
  active: () => css`
    pointer-events: none;
    color: ${colors.purple};
  `,
};

const FilterStyled = styled.div<IFilterStyledProps>`
  display: flex;
  align-items: center;
  color: ${colors.blue};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  & > *:not(:last-child) {
    margin-right: 8px;
  }

  ${applyStyleModifiers(FILTER_MODIFIERS)};
`;

const CountStyled = styled.span`
  padding: 2px 8px;
  border-radius: 999px;
  background: ${colors.gray400};
  color: ${colors.gray200};
  font-weight: 700;
`;

export { FilterStyled, CountStyled };
