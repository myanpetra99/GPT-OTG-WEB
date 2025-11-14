import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/thankyou', label: 'How-To' },
  { to: '/privacyandpolicy', label: 'Privacy & Policy' },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <NavLink to="/" className="navbar__logo" end>
          GPT-OTG
        </NavLink>
        <span className="navbar__tag">Beta</span>
      </div>

      <ul className="navbar__links">
        {navLinks.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <a
        className="navbar__cta"
        href="https://chrome.google.com/webstore/detail/gpt-otg-development-build/fmibenbpkickilfocjdghokdnkmolhfi?hl=en&authuser=0"
        target="_blank"
        rel="noreferrer"
      >
        Get Extension
      </a>
    </nav>
  );
};

export default Navbar;
