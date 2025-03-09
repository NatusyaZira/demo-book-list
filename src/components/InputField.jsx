// InputField.js
import React from 'react';

const InputField = ({ name, value, onChange, placeholder, validationError }) => (
  <div className="col">
    <input
      type="text"
      className={`form-control ${validationError ? 'is-invalid' : ''}`}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={placeholder}
    />
    {validationError && <div className="invalid-feedback">{placeholder} is required</div>}
  </div>
);

export default InputField;
