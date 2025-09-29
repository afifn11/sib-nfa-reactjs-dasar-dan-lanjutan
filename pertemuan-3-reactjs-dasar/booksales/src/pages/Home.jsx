import React from 'react';
import { Link } from 'react-router-dom';
import allBooks from '../utils/books.js'; 
import BookCard from '../components/BookCard.jsx'; 

function Home() {

  const featuredBooks = allBooks.slice(0, 6);

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
                <Link to="/book" className="btn btn-dark btn-lg px-4 me-md-2">Belanja Sekarang</Link>
                <Link to="/book" className="btn btn-outline-dark btn-lg px-4">Lihat Koleksi</Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              {/* GAMBAR HERO*/}
              <img src="/images/hero-image.jpg" className="d-block mx-lg-auto img-fluid rounded shadow" alt="Books illustration" width="600" height="400" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="fw-bold mb-5 text-center">Koleksi Buku Terbaru</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {/* menggunakan .map untuk menampilkan setiap buku */}
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;