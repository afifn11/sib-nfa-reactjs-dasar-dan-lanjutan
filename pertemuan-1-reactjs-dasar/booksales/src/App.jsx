import { Routes, Route, Link } from 'react-router-dom';

// Import semua halaman yang sudah kamu buat
import Home from './pages/Home';
import Book from './pages/Book';
import Team from './pages/Team';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="p-3 bg-white border-bottom shadow-sm sticky-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            {/* Logo */}
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
              <i className="fas fa-book fa-2x me-2"></i>
              <span className="fw-bold fs-4">BookSales</span>
            </Link>

            {/* Menu Navigasi */}
            <ul className="nav mx-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-3 text-dark fw-semibold">Home</Link></li>
              <li><Link to="/book" className="nav-link px-3 text-dark fw-semibold">Book</Link></li>
              <li><Link to="/team" className="nav-link px-3 text-dark fw-semibold">Team</Link></li>
              <li><Link to="/contact" className="nav-link px-3 text-dark fw-semibold">Contact</Link></li>
            </ul>

            {/* Tombol Kanan */}
            <div className="text-end">
              <button type="button" className="btn btn-outline-dark me-2 fw-semibold">Login</button>
              <button type="button" className="btn btn-dark fw-semibold">Register</button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== KONTEN HALAMAN UTAMA ===== */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ===== FOOTER ===== */}
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
    </>
  );
}

export default App;