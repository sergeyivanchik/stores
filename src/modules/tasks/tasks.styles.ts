import styled from 'styled-components';

import { Filters } from '@/components';

const TasksStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const FiltersStyled = styled(Filters)`
  margin-bottom: 24px !important;
`;

export { TasksStyled, FiltersStyled };
