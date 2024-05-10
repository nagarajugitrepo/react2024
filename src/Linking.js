// New.js
import React from "react";
import { Link } from 'react-router-dom';

const Veeru= () => {
  return (
    <div>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/About">about</Link></li>
        <li><Link to="/Dashboard">dashboard</Link></li>
      </ul>
    </div>
  );
}

export default Veeru;
