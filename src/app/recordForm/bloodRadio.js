import React, { useState } from 'react';

const RadioGroup = () => {
  const [selectedBloodType, setSelectedBloodType] = useState('');

  const handleRadioChange = (e) => {
    setSelectedBloodType(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="inline-flex items-center">
        <input className="form-radio text-indigo-600 h-5 w-5"
          type="radio" value="A+" name="bloodType"
          checked={selectedBloodType === 'A+'}
          onChange={handleRadioChange}
        />
        <span className="ml-2">A+</span>
      </label>
      <label className="inline-flex items-center">
        <input className="form-radio text-indigo-600 h-5 w-5"
          type="radio" value="A-" name="bloodType"
          checked={selectedBloodType === 'A-'}
          onChange={handleRadioChange}
        />
        <span className="ml-2">A-</span>
      </label>
      <label className="inline-flex items-center">
        <input className="form-radio text-indigo-600 h-5 w-5"
          type="radio" value="B+" name="bloodType"
          checked={selectedBloodType === 'B+'}
          onChange={handleRadioChange}
        />
        <span className="ml-2">B+</span>
      </label>
      <label className="inline-flex items-center">
        <input className="form-radio text-indigo-600 h-5 w-5"
          type="radio" value="B-" name="bloodType"
          checked={selectedBloodType === 'B-'}
          onChange={handleRadioChange}
        />
        <span className="ml-2">B-</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio text-indigo-600 h-5 w-5"
          name="bloodType"
          value="AB+"
          checked={selectedBloodType === 'AB+'}
          onChange={handleRadioChange}
        />
        <span className="ml-2">Blood Type AB+</span>
      </label>
      <label className="inline-flex items-center">
        <input className="form-radio text-indigo-600 h-5 w-5"
          type="radio" value="AB-" name="bloodType"
          checked={selectedBloodType === 'AB-'}
          onChange={handleRadioChange}
        />
        <span className="ml-2">AB-</span>
      </label>
      <label className="inline-flex items-center">
        <input className="form-radio text-indigo-600 h-5 w-5"
          type="radio" value="O+" name="bloodType"
          checked={selectedBloodType === 'O+'}
          onChange={handleRadioChange}
        />
        <span className="ml-2">O+</span>
      </label>
      <label className="inline-flex items-center">
        <input className="form-radio text-indigo-600 h-5 w-5"
          type="radio" value="O-" name="bloodType"
          checked={selectedBloodType === 'O-'}
          onChange={handleRadioChange}
        />
        <span className="ml-2">O-</span>
      </label>
    </div>
  );
};

export default RadioGroup;
