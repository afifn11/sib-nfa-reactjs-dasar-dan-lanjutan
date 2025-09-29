import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4 fw-bold">Login Akun</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Alamat Email</label>
                  <input type="email" className="form-control" id="email" placeholder="nama@email.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Masukkan password" required />
                </div>
                <div className="d-grid mt-4">
                  <button type="submit" className="btn btn-dark fw-semibold">Login</button>
                </div>
              </form>
              <div className="text-center mt-3">
                <small className="text-muted">
                  Belum punya akun? <Link to="/register">Daftar di sini</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;