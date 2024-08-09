import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import Loader from './components/Loader/Loader';
import Exit from './components/Exit/Exit';
import CardModal from './components/CardModal/CardModal'; // Импортируем CardModal
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
            <Route path="card/:cardId" element={<CardModal cards={cards} />} /> {/* Новый маршрут для просмотра карточки */}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
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
