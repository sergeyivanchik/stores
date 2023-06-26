import { PropsWithChildren } from 'react';

interface IButtonProps extends PropsWithChildren {
  title: string;
  onClick: () => void;
  className?: string;
}

export { IButtonProps };
