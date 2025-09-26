import React from 'react';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container px-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Temukan & Beli Buku Favoritmu di BookSales 📚</h1>
              <p className="lead">
                Dari novel fiksi terbaru hingga buku pengembangan diri, semua tersedia dalam satu platform. Nikmati pengalaman belanja buku online yang mudah, terpercaya, dan cepat.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">Belanja Sekarang</button>
                <button type="button" className="btn btn-outline-dark btn-lg px-4">Lihat Koleksi</button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img src="/images/hero-image.jpg" className="d-block mx-lg-auto img-fluid" alt="Books illustration" width="500" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">Koleksi Buku Pilihan</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div className="col">
              <div className="card shadow-sm h-100">
                <img src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" className="card-img-top" alt="Book 1" style={{height: "300px", objectFit: "cover"}} />
                <div className="card-body">
                  <h5 className="card-title">Seni Minimalis</h5>
                  <p className="card-text">Temukan kebahagiaan dalam kesederhanaan dan fokus pada hal yang benar-benar penting.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-dark">Rp 95.000</span>
                    <button className="btn btn-sm btn-dark">Beli</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100">
                <img src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="card-img-top" alt="Book 2" style={{height: "300px", objectFit: "cover"}} />
                <div className="card-body">
                  <h5 className="card-title">Petualangan Dunia Kata</h5>
                  <p className="card-text">Sebuah novel fantasi yang akan membawamu ke dunia imajinasi tak terbatas.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-dark">Rp 125.000</span>
                    <button className="btn btn-sm btn-dark">Beli</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm h-100">
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="card-img-top" alt="Book 3" style={{height: "300px", objectFit: "cover"}} />
                <div className="card-body">
                  <h5 className="card-title">Dasar-Dasar Keuangan</h5>
                  <p className="card-text">Panduan praktis untuk mengelola keuangan pribadi dan memulai investasi.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-dark">Rp 150.000</span>
                    <button className="btn btn-sm btn-dark">Beli</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;