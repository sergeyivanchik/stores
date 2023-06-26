import styled from 'styled-components';

import { colors } from '@/constants';

const ButtonStyled = styled.div`
  background-color: ${colors.blueDark};
  border-radius: 8px;
  padding: 0 16px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.blue};
  }

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

const TitleStyled = styled.span`
  color: ${colors.gray100};
  font-size: 14px;
  font-weight: 700;
`;

export { ButtonStyled, TitleStyled };
