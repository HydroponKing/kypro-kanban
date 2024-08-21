import React, { createContext, useState, useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../api';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error('Failed to load tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
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
