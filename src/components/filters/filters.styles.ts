import styled from 'styled-components';

const FiltersStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export { FiltersStyled };
