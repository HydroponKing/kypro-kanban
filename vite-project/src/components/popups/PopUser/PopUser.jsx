// src/components/popups/PopUser/PopUser.jsx
import React from 'react';
import './PopUser.css';

const PopUser = ({ onClose }) => (
  <div className="user-modal">
    <div className="user-modal-content">
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input className="checkbox" name="checkbox" type="checkbox" />
      </div>
      <button type="button" onClick={onClose}>Выйти</button>
    </div>
  </div>
);

export default PopUser;
