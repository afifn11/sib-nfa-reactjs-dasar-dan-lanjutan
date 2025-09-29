import React, { useState } from 'react';
import initialBooks from '../utils/books.js'; 
import BookCard from '../components/BookCard.jsx'; 

function Book() {
  // 1. state untuk menyimpan daftar buku, diisi dengan data awal
  const [displayedBooks, setDisplayedBooks] = useState(initialBooks);

  // 2. fungsi untuk menangani penambahan buku baru
  const handleAddBook = () => {
    const newBook = {
      id: displayedBooks.length + 1, 
      title: "Buku Baru yang Keren",
      author: "Penulis Misterius",
      year: new Date().getFullYear(),
      description: "Ini adalah deskripsi untuk buku baru yang ditambahkan secara dinamis.",
      image: `https://picsum.photos/seed/${Math.random()}/600/400` 
    };

    // 3. Update state dengan menambahkan buku baru ke array yang sudah ada
    setDisplayedBooks(prevBooks => [...prevBooks, newBook]);
  };

  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Judul Halaman dan Tombol Tambah Buku */}
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 fw-bold">Jelajahi Semua Koleksi Kami</h1>
            <p className="lead text-muted">Temukan buku yang akan menemanimu berpetualang, belajar, dan bertumbuh.</p>
          </div>
        </div>

        {/* Daftar Buku */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* menggunakan .map untuk menampilkan setiap buku dari state */}
          {displayedBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Tombol Tambah Buku */}
        <div className="text-center mt-5">
          <button className="btn btn-dark" onClick={handleAddBook}>
            Tambah Buku Baru (Hooks)
          </button>
        </div>
      </div>
    </section>
  );
}

export default Book;