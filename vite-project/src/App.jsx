// src/App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopExit from './components/popups/PopExit/PopExit';
import PopUser from './components/popups/PopUser/PopUser';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Имитация загрузки данных в 2 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="wrapper">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Main />
          <PopBrowse />
          <PopNewCard />
          <PopExit />
          <PopUser />
        </>
      )}
    </div>
  );
}

export default App;
