interface ILoadingProps {
  size?: number;
  thickness?: number;
}

interface ILoadingStyledProps {
  $size?: ILoadingProps['size'];
  $thickness?: ILoadingProps['thickness'];
}

export { ILoadingProps, ILoadingStyledProps };
