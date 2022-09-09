import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Header = () => (
  <header className="arrowBack">
    <NavLink to="/">
      <div>
        <BiArrowBack />
      </div>
    </NavLink>
  </header>
);

export default Header;
