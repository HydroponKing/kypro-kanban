import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';
import Loader from '../../components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { TasksContext } from '../../components/TasksContext';

const HomePage = ({ onLogout }) => {
  const { tasks, addTask, loading } = useContext(TasksContext);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header onCardAdd={(newCard) => addTask({ ...newCard, status: 'Без статуса' })} onLogout={onLogout} />
      <Main cards={tasks} />
      <PopBrowse />
      <Outlet />
    </>
  );
};

export default HomePage;
