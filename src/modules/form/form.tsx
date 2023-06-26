import { FC, useState } from 'react';

import { useTodos } from '@/stores/zustand';

import { ReactComponent as Plus } from '@/assets/icons/plus.svg';

import { Button, Input } from '@/components';

import { FormStyled } from './form.styles';

const Form: FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const { createTask } = useTodos((state) => ({
    createTask: state.createTask,
  }));

  const handleClick = () => {
    if (!value) {
      setError('Please fill in the field');
    } else {
      createTask(value);
      setValue('');
    }
  };
  const handleChange = (value: string) => {
    setValue(value);
    !!error && setError('');
  };

  return (
    <FormStyled>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Enter task"
        error={error}
      />
      <Button title="Add" onClick={handleClick}>
        <Plus />
      </Button>
    </FormStyled>
  );
};

export { Form };
