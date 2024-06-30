import React from 'react';
//import './PopExit.css';

const PopExit = () => (
  <div className="pop-exit" id="popExit">
    <div className="pop-exit__container">
      <div className="pop-exit__block">
        <div className="pop-exit__ttl">
          <h2>Вы уверены, что хотите выйти?</h2>
        </div>
        <div className="pop-exit__form-group">
          <button className="pop-exit__exit-yes _hover01">
            <a href="#">Да</a>
          </button>
          <button className="pop-exit__exit-no _hover01">
            <a href="#">Нет</a>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PopExit;
