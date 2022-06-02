import Task from '../components/Task';

export default {
  title: 'Component/Task',
  component: Task,
};

export const Default = () => {
  const task = {
    content: '출근하기',
    complete: false,
  };

  return <Task complete={task.complete} content={task.content} />;
};
