import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>SUCCESS !</p>
        <button id='close' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
