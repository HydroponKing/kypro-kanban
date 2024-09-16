import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { TasksContext } from '../../components/TasksContext';
import { fetchTasks } from '../../api'; // Импорт функции fetchTasks для загрузки задач

const HomePage = ({ onLogout }) => {
  const { tasks, setTasks, loading, setLoading } = useContext(TasksContext); // Теперь используем setTasks для обновления задач в контексте

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true); // Показываем лоадер
      try {
        const fetchedTasks = await fetchTasks(); // Загружаем задачи
        setTasks(fetchedTasks); // Обновляем задачи в контексте
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      } finally {
        setLoading(false); // Скрываем лоадер
      }
    };

    loadTasks(); // Загружаем задачи при монтировании компонента
  }, [setTasks, setLoading]); // Хук срабатывает при первом рендере

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header onCardAdd={(newCard) => addTask({ ...newCard, status: 'Без статуса' })} onLogout={onLogout} />
      <Main cards={tasks} />
      <Outlet />
    </>
  );
};

export default HomePage;
