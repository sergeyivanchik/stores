import styled, { css } from 'styled-components';

import { applyStyleModifiers } from '@/utils';

import { colors } from '@/constants';

import { IInputStyledProps } from './input.types';

const WrapperStyled = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const INPUT_MODIFIERS = {
  error: () => css`
    border-color: ${colors.danger};
  `,
};

const InputStyled = styled.input<IInputStyledProps>`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${colors.gray700};
  background-color: ${colors.gray500};
  color: ${colors.gray100};
  height: 54px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 16px;

  &:focus {
    border-color: ${colors.purpleDark};
  }

  ${applyStyleModifiers(INPUT_MODIFIERS)};
`;

const ErrorStyled = styled.span`
  font-size: 14px;
  color: ${colors.danger};
  margin-left: 8px;
  display: inline-block;
`;

export { WrapperStyled, InputStyled, ErrorStyled };
