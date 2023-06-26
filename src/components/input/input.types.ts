interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error: string;
  disabled?: boolean;
  className?: string;
}

interface IInputStyledProps {
  modifiers?: 'error';
}

export { IInputProps, IInputStyledProps };
