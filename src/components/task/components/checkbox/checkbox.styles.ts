import styled, { css } from 'styled-components';

import { applyStyleModifiers } from '@/utils';

import { colors } from '@/constants';
import { ReactComponent as Checkbox } from '@/assets/icons/checkbox.svg';

const CHECKBOX_MODIFIERS = {
  unchecked: () => css`
    path {
      &:nth-child(1),
      &:nth-child(3) {
        display: none;
      }

      &:nth-child(2) {
        fill: ${colors.blue};
      }
    }

    &:hover {
      path {
        &:nth-child(2) {
          fill: ${colors.blueDark};
        }

        &:nth-child(1) {
          fill: ${colors.blueDark};
          opacity: 0.2;
        }
      }
    }
  `,
};

const CheckboxStyled = styled(Checkbox)`
  cursor: pointer;

  &:hover {
    path {
      &:nth-child(1),
      &:nth-child(2) {
        fill: ${colors.purple};
      }
    }
  }

  ${applyStyleModifiers(CHECKBOX_MODIFIERS)};
`;

export { CheckboxStyled };
