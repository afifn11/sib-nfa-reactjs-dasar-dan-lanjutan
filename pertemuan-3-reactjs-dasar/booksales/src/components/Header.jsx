import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top p-3">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center text-dark text-decoration-none">
          <i className="fas fa-book fa-2x me-2"></i>
          <span className="fw-bold fs-4">BookSales</span>
        </Link>

        {/* Tombol Hamburger untuk Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Wrapper untuk menu yang akan dilipat */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Menu Navigasi */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => `nav-link px-3 fw-semibold ${isActive ? 'text-dark border-bottom border-dark border-2' : 'text-secondary'}`}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/book" className={({ isActive }) => `nav-link px-3 fw-semibold ${isActive ? 'text-dark border-bottom border-dark border-2' : 'text-secondary'}`}>Book</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team" className={({ isActive }) => `nav-link px-3 fw-semibold ${isActive ? 'text-dark border-bottom border-dark border-2' : 'text-secondary'}`}>Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => `nav-link px-3 fw-semibold ${isActive ? 'text-dark border-bottom border-dark border-2' : 'text-secondary'}`}>Contact</NavLink>
            </li>
          </ul>

          {/* Tombol Kanan */}
            <div className="d-flex">
            <Link to="/login" className="btn btn-outline-dark me-2 fw-semibold">Login</Link>
            <Link to="/register" className="btn btn-dark fw-semibold">Register</Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;