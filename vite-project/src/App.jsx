import React from "react";
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopExit from './components/popups/PopExit/PopExit';
import PopUser from './components/popups/PopUser/PopUser';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <PopBrowse />
      <PopNewCard />
      <PopExit />
      <PopUser />
    </div>
  );
}

export default App;
