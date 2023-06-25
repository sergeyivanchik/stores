import styled from 'styled-components';

const MainLayoutStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const WrapperStyled = styled.div`
  display: flex;
  flex: 1;
  padding: 0 10px;
  justify-content: center;
`;

const ContainerStyled = styled.div`
  max-width: 736px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export { MainLayoutStyled, WrapperStyled, ContainerStyled };
