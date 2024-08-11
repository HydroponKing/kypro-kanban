import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Exit from './pages/Exit/Exit';
import CardModal from './pages/CardModal/CardModal';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import routes from './components/routes/routes'; // Импортируем маршруты
import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState(true);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={routes.home}
            element={
              <PrivateRoute isAuth={isAuth}>
                <HomePage onLogout={handleLogout} />
              </PrivateRoute>
            }
          />
          <Route
            path={routes.homepage}
            element={
              <PrivateRoute isAuth={isAuth}>
                <HomePage onLogout={handleLogout} />
              </PrivateRoute>
            }
          />
          <Route path={routes.signin} element={<Signin onLogin={handleLogin} />} />
          <Route path={routes.signup} element={<Signup />} />
          <Route path={routes.exit} element={<Exit onLogout={handleLogout} />} />
          <Route path={routes.card} element={<CardModal />} />
          <Route path={routes.notFound} element={<NotFound />} />
          <Route path={routes.wildcard} element={<Navigate to={routes.notFound} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
