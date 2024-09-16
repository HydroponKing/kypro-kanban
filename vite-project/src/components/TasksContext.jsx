import React, { createContext, useState } from 'react';
import { createTask, updateTask, deleteTask } from '../api'; // Добавляем импорт createTask, updateTask, deleteTask

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const addTask = async (newTask) => {
    try {
      const updatedTasks = await createTask(newTask);
      setTasks(updatedTasks); // Обновляем весь список задач
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const editTask = async (taskId, updatedTask) => {
    try {
      const updatedTasks = await updateTask(taskId, updatedTask);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Failed to edit task:', error);
    }
  };

  const removeTask = async (taskId) => {
    try {
      const updatedTasks = await deleteTask(taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, addTask, editTask, removeTask, loading, setLoading }}>
      {children}
    </TasksContext.Provider>
  );
};
