  import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import PopBrowse from './components/popups/PopBrowse/PopBrowse';
import PopNewCard from './components/popups/PopNewCard/PopNewCard';
import PopExit from './components/popups/PopExit/PopExit';
import PopUser from './components/popups/PopUser/PopUser';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <PopBrowse />
    <PopNewCard />
    <PopExit />
    {/*<PopUser /> */}
  </div>
);

export default App;
