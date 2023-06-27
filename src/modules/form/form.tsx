import { FC } from 'react';
import { shallow } from 'zustand/shallow';

import { useInput, useTodos } from '@/stores/zustand';

import { ReactComponent as Plus } from '@/assets/icons/plus.svg';

import { Button, Input } from '@/components';

import { FormStyled } from './form.styles';

const Form: FC = () => {
  const { value, error, setValue, setError } = useInput(
    (state) => state,
    shallow
  );
  const { createTask } = useTodos(
    (state) => ({
      createTask: state.createTask,
    }),
    shallow
  );

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
