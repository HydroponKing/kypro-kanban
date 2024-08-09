import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import Loader from './components/Loader/Loader';
import Exit from './components/Exit/Exit'; // Импортируйте Exit
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
          <Route path="/exit" element={<Exit onLogout={handleLogout} />} /> {/* Новый маршрут для выхода */}
          <Route
            path="/"
            element={
              isAuth ? (
                <>
                  <Header onCardAdd={addCard} onLogout={handleLogout} />
                  <Main cards={cards} />
                  <PopBrowse />
                </>
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
