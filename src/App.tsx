import styled from 'styled-components';
import TaskProvider from './context/TaskProvider';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';
import Header from './components/Header';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const App = () => (
  <TaskProvider>
    <Container>
      <Header>To Do</Header>
      <NewTaskForm />
      <TaskList />
    </Container>
  </TaskProvider>
);

export default App;
