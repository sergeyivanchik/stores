import styled from 'styled-components';

import { colors } from '@/constants';

const EmptyStyled = styled.div`
  border-top: 1px solid ${colors.gray400};
  border-radius: 8px;
  padding: 64px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleStyled = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: ${colors.gray300};
  margin-top: 16px;
  text-align: center;
`;

export { EmptyStyled, TitleStyled };
