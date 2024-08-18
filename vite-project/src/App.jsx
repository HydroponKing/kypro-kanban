import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Exit from './pages/Exit/Exit';
import CardModal from './pages/CardModal/CardModal';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';
import EditTask from './pages/EditTask/EditTask';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import routes from './components/routes/routes';
import './App.css';
import { UserProvider } from './components/UserContext.jsx';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('authToken');
  };

  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
              <Route path={routes.home} element={<HomePage onLogout={handleLogout} />}>
                <Route path={routes.card} element={<CardModal />} />
                <Route path={routes.editTask} element={<EditTask />} />
                <Route path="exit" element={<Exit onLogout={handleLogout} />} />
              </Route>
            </Route>
            <Route path={routes.signin} element={<Signin onLogin={handleLogin} />} />
            <Route path={routes.signup} element={<Signup />} />
            <Route path={routes.notFound} element={<NotFound />} />
            <Route path={routes.wildcard} element={<Navigate to={routes.notFound} />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
