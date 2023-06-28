//zustand
// import { shallow } from 'zustand/shallow';
//mobx
import { observer } from 'mobx-react-lite';
//redux
import { useSelector } from 'react-redux';

//zustand
// import { useInput, useTodos } from '@/stores/zustand';
//mobx
// import Store from '@/stores/mobx/store';
//redux
import { useActions } from '@/hooks';
import { getError, getValue } from '@/stores/redux';

import { ReactComponent as Plus } from '@/assets/icons/plus.svg';

import { Button, Input } from '@/components';

import { FormStyled } from './form.styles';

const Form = observer(() => {
  //zustand
  // const { value, error, setValue, setError } = useInput(
  //   (state) => state,
  //   shallow
  // );
  // const { createTask } = useTodos(
  //   (state) => ({
  //     createTask: state.createTask,
  //   }),
  //   shallow
  // );

  //mobx
  // const { createTask, value, error, setValue } = Store;

  //redux
  const { createTask, setValue } = useActions();
  const error = useSelector(getError);
  const value = useSelector(getValue);

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <FormStyled>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Enter task"
        error={error}
      />
      <Button title="Add" onClick={createTask}>
        <Plus />
      </Button>
    </FormStyled>
  );
});

export { Form };
