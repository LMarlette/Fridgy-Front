import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
  return (
      <div>
            <NavLink to='/'>Login Page  </NavLink>
            <NavLink to='/contact'>Contact </NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    )
};

export default Navigation;
