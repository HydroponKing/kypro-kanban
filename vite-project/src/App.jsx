import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Loader from './components/Loader/Loader';
import Exit from './pages/Exit/Exit';
import CardModal from './pages/CardModal/CardModal';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';
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
          <Route
            path="/"
            element={
              isAuth ? (
                <HomePage onCardAdd={addCard} onLogout={handleLogout} cards={cards} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route
            path="/homepage"
            element={
              isAuth ? (
                <HomePage onCardAdd={addCard} onLogout={handleLogout} cards={cards} />
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route path="/signin" element={<Signin onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/exit" element={<Exit onLogout={handleLogout} />} />
          <Route path="/card/:cardId" element={<CardModal cards={cards} />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
