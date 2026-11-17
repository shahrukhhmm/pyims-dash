// Dropdown.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ isOpen, onMouseEnter, onMouseLeave, options }) => {
  return (
    <div
      className={`absolute bg-white shadow-lg mt-2 w-48 z-50 ${isOpen ? 'block' : 'hidden'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ul className='p-2'>
        {options.map((option, index) => (
          <li key={index} className='flex items-center p-2 hover:bg-gray-100'>
            {option.image && (
              <img src={option.image} alt={option.label} className="w-8 h-8 mr-2" />
            )}
            <NavLink to={option.link} className='block'>
              {option.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
