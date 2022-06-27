import styled from 'styled-components';
import { useTasks } from '../context/TaskProvider';
import Toggle from './Toggle';

type propsType={
  content:string,
  complete?:boolean,
  id:string,
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 0 8px;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0,0,0,0.2);
  list-style: none;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }:{complete:boolean}) => (complete ? 'line-through' : 'none')};
`;

const Test = styled.div`
  color:red;
`;

const RemoveButton = styled.button`
  width: 60px;
  height: 24px;
  margin-left: 8px;
  color: white;
  border-radius: 8px;
  border: none;
  background-color: red;
  cursor: pointer;
`;

const Task = ({
  content, complete = false, id, ...props
}:propsType) => {
  const {
    updateTask, removeTask,
  } = useTasks();

  return (
    <ListItem {...props} id={id}>
      <Toggle on={complete} onChange={(e) => updateTask(id, e.target.value as unknown as boolean)} />
      <Content complete={complete}>{content}</Content>
      <RemoveButton onClick={() => removeTask(id)}>Remove</RemoveButton>
    </ListItem>
  );
};

export default Task;
