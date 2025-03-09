// SuccessMessage.js
import React from 'react';

const SuccessMessage = ({ message }) => {
  return message ? (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  ) : null;
};

export default SuccessMessage;
