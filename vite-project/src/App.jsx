import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Exit from './pages/Exit/Exit';
import CardModal from './pages/CardModal/CardModal';
import EditTaskModal from './pages/EditTaskModal/EditTaskModal'; // Новый компонент для редактирования задачи
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';
import EditTask from './pages/EditTask/EditTask';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import routes from './components/routes/routes';
import './App.css';
import { UserProvider } from './components/UserContext';
import { TasksProvider } from './components/TasksContext';

function App() {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
  };

  return (
    <UserProvider>
      <TasksProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path={routes.home} element={<HomePage />}>
                  {/* Модальные компоненты рендерятся внутри основной страницы */}
                  <Route path={routes.editTask} element={<EditTask />} />
                  <Route path={routes.card} element={<CardModal />} />
                  <Route path={routes.editTaskModal} element={<EditTaskModal />} />
                  <Route path="exit" element={<Exit onLogout={handleLogout} />} />
                </Route>
              </Route>
              <Route path={routes.signin} element={<Signin />} />
              <Route path={routes.signup} element={<Signup />} />
              <Route path={routes.notFound} element={<NotFound />} />
              <Route path="*" element={<Navigate to={routes.notFound} />} />
            </Routes>
          </div>
        </Router>
      </TasksProvider>
    </UserProvider>
  );
}

export default App;
