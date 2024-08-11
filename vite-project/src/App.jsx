import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Signin from './pages/Signin/Signin';  // Обновленный путь
import Signup from './pages/Signup/Signup';  // Путь не изменился
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import Loader from './components/Loader/Loader';
import Exit from './pages/Exit/Exit';  // Обновленный путь
import CardModal from './pages/CardModal/CardModal';  // Обновленный путь
import NotFound from './pages/NotFound/NotFound';  // Обновленный путь
import { cards as initialCards } from './data';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(true);

  const addCard = (newCard) => {
    setCards([...cards, { ...newCard, status: 'Без статуса' }]);
  };

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  if (loading) {
    return <Loader setCards={setCards} setLoading={setLoading} initialCards={initialCards} />;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              isAuth ? (
                <Layout onCardAdd={addCard} onLogout={handleLogout} cards={cards} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          >
            <Route path="exit" element={<Exit onLogout={handleLogout} />} />
            <Route path="card/:cardId" element={<CardModal cards={cards} />} />
          </Route>
          <Route path="404" element={<NotFound />} /> {/* Новый маршрут для страницы 404 */}
          <Route path="*" element={<Navigate to="/404" />} /> {/* Перенаправляем все несуществующие маршруты на 404 */}
        </Routes>
      </div>
    </Router>
  );
}

function Layout({ onCardAdd, onLogout, cards }) {
  return (
    <>
      <Header onCardAdd={onCardAdd} onLogout={onLogout} />
      <Main cards={cards} />
      <PopBrowse />
      <Outlet />
    </>
  );
}

export default App;
