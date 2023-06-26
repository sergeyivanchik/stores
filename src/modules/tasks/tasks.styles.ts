import styled from 'styled-components';

const TasksStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  & > *:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export { TasksStyled };
