import { FC } from 'react';

import { ILoadingProps } from './loading.types';

import { LoadingStyled, LoadingWrapperStyled } from './loading.styles';

const Loading: FC<ILoadingProps> = ({ size = 48, thickness = 2 }) => {
  return (
    <LoadingWrapperStyled>
      <LoadingStyled $size={size} $thickness={thickness}>
        <div />
        <div />
        <div />
        <div />
      </LoadingStyled>
    </LoadingWrapperStyled>
  );
};

export { Loading };
