import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <Link to="/login" type="button">Login</Link>
      <Link to="/register" type="button">Register</Link>
      <Link to="/game" type="button">Play</Link>
    </div>
  );
}
