import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/photos/Logo.jpeg" alt="Kasa Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
