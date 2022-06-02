import styled from 'styled-components';
import {
  ChangeEvent, FormEvent, useState,
} from 'react';
import { useTasks } from '../context/TaskProvider';

const Form = styled.form`
  width: 400px;
`;

const Input = styled.input`
  width: 332px;
  height: 32px;
  padding: 4px 6px;
  border: 2px solid black;
  border-radius: 8px;
  box-sizing: border-box;
`;

const SubmotButton = styled.button`
  width: 60px;
  height: 32px;
  padding: 4px 6px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;
`;

const NewTaskForm = (props:any) => {
  const [task, setTask] = useState('');

  const { addTask } = useTasks();

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    setTask('');
  };

  return (
    <Form {...props} onSubmit={handleSubmit}>
      <Input
        onChange={(e:ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        required
        type="text"
        value={task}
      />
      <SubmotButton>Add</SubmotButton>
    </Form>
  );
};

export default NewTaskForm;
