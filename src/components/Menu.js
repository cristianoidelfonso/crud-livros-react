import React from 'react';
import { Link } from "react-router-dom";

const Menu = props => {
  return(
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cadastrar">Cadastrar</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;