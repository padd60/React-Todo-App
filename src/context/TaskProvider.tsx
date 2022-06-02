import { v4 } from 'uuid';
import {
  createContext, useContext, useMemo, useState,
} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext({} as {
  tasks:{
    id: string,
    content:string,
    complete: boolean,
  }[],
  addTask: (content:string)=>void,
  updateTask: (id:string, status:boolean)=>void,
  removeTask: (id:string)=>void,
});

export const useTasks = () => useContext(TaskContext);

const TaskProvider = ({ children }:any) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []) as [{
    id: string,
    content:string,
    complete: boolean,
  }[], (value: any) => void];

  const addTask = (content:string) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content,
        complete: false,
      },
    ]);
  };

  const updateTask = (id:string, status:boolean) => {
    setTasks(tasks.map((item) => (item.id === id ? {
      ...item,
      complete: status,
    } : item)));
  };

  const removeTask = (id:string) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  const value = useMemo(() => ({
    tasks,
    addTask,
    updateTask,
    removeTask,
  }), [tasks]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
