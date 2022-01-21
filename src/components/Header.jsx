import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/create"
      >
        Create Expense
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/edit"
      >
        Edit Expense
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'is-active' : 'none')}
        to="/help"
      >
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
