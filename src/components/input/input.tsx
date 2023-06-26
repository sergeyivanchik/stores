import { FC } from 'react';

import { IInputProps } from './input.types';

import { ErrorStyled, InputStyled, WrapperStyled } from './input.styles';

const Input: FC<IInputProps> = ({
  className,
  error,
  onChange,
  value,
  placeholder,
  disabled = false,
}) => {
  const hasErrorMode = !!error ? 'error' : undefined;

  const HasError = !!error && <ErrorStyled>{error}</ErrorStyled>;

  return (
    <WrapperStyled className={className}>
      <InputStyled
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        modifiers={hasErrorMode}
      />
      {HasError}
    </WrapperStyled>
  );
};

export { Input };
