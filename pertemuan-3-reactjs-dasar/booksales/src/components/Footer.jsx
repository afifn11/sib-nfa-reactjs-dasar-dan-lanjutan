import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-4 border-top bg-white mt-auto">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
          <li className="nav-item"><Link to="/book" className="nav-link px-2 text-muted">Book</Link></li>
          <li className="nav-item"><Link to="/team" className="nav-link px-2 text-muted">Team</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-muted">Contact</Link></li>
        </ul>
        <p className="text-center text-muted mb-0">© 2025 BookSales, Inc</p>
      </div>
    </footer>
  );
}

export default Footer;