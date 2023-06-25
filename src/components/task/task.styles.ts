import styled from 'styled-components';
import { rgba } from 'polished';

import { colors } from '@/constants';
import { ReactComponent as Basket } from '@/assets/icons/basket.svg';

import { ITitleStyledProps } from './task.types';

const TaskStyled = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${colors.gray400};
  background: ${colors.gray500};
  box-shadow: 0 2px 8px 0 ${rgba(colors.black, 0.06)};
  font-size: 14px;

  & > *:not(:last-child) {
    margin-right: 12px;
  }
`;

const TitleStyled = styled.div<ITitleStyledProps>`
  color: ${colors.gray100};
  font-size: 14px;
  width: 100%;
`;

const BasketStyled = styled(Basket)`
  cursor: pointer;

  &:hover {
    border-radius: 4px;
    background-color: ${colors.gray400};

    path {
      fill: ${colors.danger};
    }
  }
`;

export { TaskStyled, BasketStyled, TitleStyled };
