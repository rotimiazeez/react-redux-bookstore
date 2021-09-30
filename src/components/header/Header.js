import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import './header.css';

const Header = () => (
  <header>
    <nav>
      <Link className="logo" to="/">BOOKSTORE CMS</Link>
      <ul>
        <li><Link to="/">BOOKS</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <Link to="/profile" className="profile"><FaUserAlt /></Link>
    </nav>
  </header>
);

export default Header;
