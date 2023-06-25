import styled from 'styled-components';

import { colors } from '@/constants';

import { ILoadingStyledProps } from './loading.types';

const LoadingWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const LoadingStyled = styled.div<ILoadingStyledProps>`
  display: block;
  position: relative;
  width: ${({ $size = 48 }) => `${$size + 16}px`};
  height: ${({ $size = 48 }) => `${$size + 16}px`};
  margin-left: auto;
  margin-right: auto;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ $size = 48 }) => `${$size}px`};
    height: ${({ $size = 48 }) => `${$size}px`};
    margin: 8px;
    border: ${({ $thickness }) => `${$thickness}px`} solid;
    border-radius: 50%;
    animation: moving 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${colors.purpleDark} transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes moving {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { LoadingStyled, LoadingWrapperStyled };
