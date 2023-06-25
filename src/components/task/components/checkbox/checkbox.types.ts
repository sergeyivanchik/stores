interface ICheckboxProps {
  onClick: () => void;
  checked: boolean;
}

interface ICheckboxStyledProps {
  modifiers?: 'unchecked';
}

export { ICheckboxProps, ICheckboxStyledProps };
