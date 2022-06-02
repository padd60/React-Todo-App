import styled from 'styled-components';
import { useTasks } from '../context/TaskProvider';
import Task from './Task';

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;
  margin-top: 16px;

  & > li{
    &:not(:first-child){
      margin-top: 8px;
    }
  }
`;

const TaskList = (props:any) => {
  const { tasks } = useTasks();

  return (
    <UnorderedList>
      {tasks.map((item) => (
        <Task
          complete={item.complete}
          content={item.content}
          id={item.id}
          key={item.id}
        />
      ))}
    </UnorderedList>
  );
};

export default TaskList;
