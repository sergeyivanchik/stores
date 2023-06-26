import styled from 'styled-components';

const FormStyled = styled.div`
  position: absolute;
  width: 100%;
  top: -27px;
  display: flex;
  align-items: flex-start;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

export { FormStyled };
