import React, { createContext, useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.log('No token found, stopping loading process');
        setLoading(false);
        return;
      }
      try {
        console.log('Loading tasks...');
        const fetchedTasks = await fetchTasks();
        console.log('Tasks loaded:', fetchedTasks);
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Failed to load tasks:', error);
      } finally {
        console.log('Setting loading to false');
        setLoading(false);
      }
    };

    const token = localStorage.getItem('authToken');
    if (token) {
      loadTasks();
    } else {
      console.log('Waiting for token to be saved...');
      const intervalId = setInterval(() => {
        const savedToken = localStorage.getItem('authToken');
        if (savedToken) {
          clearInterval(intervalId);
          loadTasks();
        }
      }, 500); // проверка каждые 500 мс
    }
  }, []);

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
    <TasksContext.Provider value={{ tasks, addTask, editTask, removeTask, loading }}>
      {children}
    </TasksContext.Provider>
  );
};
