import React from 'react';

function Contact() {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="row mb-5 text-center">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold">Hubungi Kami</h1>
          <p className="lead text-muted">Punya pertanyaan atau masukan? Jangan ragu untuk menghubungi kami melalui form di bawah ini atau detail kontak di samping.</p>
        </div>
      </div>

      {/* Konten */}
      <div className="row g-5">
        {/* Informasi Kontak */}
        <div className="col-lg-4">
          <h3 className="fw-bold mb-4">Info Kontak</h3>
          <div className="d-flex align-items-start mb-3">
            <i className="fas fa-map-marker-alt fa-2x text-dark me-3"></i>
            <div>
              <h5 className="fw-semibold">Alamat</h5>
              <p className="text-muted">Jl. Jenderal Sudirman Kav. 52-53, Jakarta Selatan, Indonesia</p>
            </div>
          </div>
          <div className="d-flex align-items-start mb-3">
            <i className="fas fa-envelope fa-2x text-dark me-3"></i>
            <div>
              <h5 className="fw-semibold">Email</h5>
              <p className="text-muted">support@booksales.com</p>
            </div>
          </div>
          <div className="d-flex align-items-start mb-3">
            <i className="fas fa-phone fa-2x text-dark me-3"></i>
            <div>
              <h5 className="fw-semibold">Telepon</h5>
              <p className="text-muted">+62 21 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="col-lg-8">
          <div className="card p-4 shadow-sm border-0">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Nama Lengkap</label>
                <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Alamat Email</label>
                <input type="email" className="form-control" id="email" placeholder="nama@email.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Pesan</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Tulis pesan Anda di sini..."></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100 py-2 fw-semibold">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;