import React from 'react';

const allBooks = [
  {
    id: 1,
    title: 'Seni Minimalis',
    description: 'Temukan kebahagiaan dalam kesederhanaan dan fokus pada hal yang penting.',
    price: 'Rp 95.000',
    imageUrl: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Petualangan Dunia Kata',
    description: 'Sebuah novel fantasi yang akan membawamu ke dunia imajinasi tak terbatas.',
    price: 'Rp 125.000',
    imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Dasar-Dasar Keuangan',
    description: 'Panduan praktis untuk mengelola keuangan pribadi dan memulai investasi.',
    price: 'Rp 150.000',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Startup Dari Nol',
    description: 'Kisah inspiratif dan strategi jitu membangun bisnis teknologi dari ide.',
    price: 'Rp 135.000',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Misteri Hutan Pinus',
    description: 'Novel detektif yang penuh teka-teki dan akan membuatmu penasaran.',
    price: 'Rp 88.000',
    imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Resep Masakan Nusantara',
    description: 'Kumpulan resep otentik dari berbagai daerah di Indonesia yang wajib dicoba.',
    price: 'Rp 110.000',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
];


function Book() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Judul Halaman */}
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 fw-bold">Jelajahi Koleksi Kami</h1>
            <p className="lead text-muted">Temukan buku yang akan menemanimu berpetualang, belajar, dan bertumbuh.</p>
          </div>
        </div>

        {/* Daftar Buku */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {allBooks.map(book => (
            <div key={book.id} className="col">
              <div className="card shadow-sm h-100">
                <img 
                  src={book.imageUrl} 
                  className="card-img-top" 
                  alt={book.title} 
                  style={{ height: "300px", objectFit: "cover" }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="fw-bold text-dark">{book.price}</span>
                    <button className="btn btn-sm btn-dark">Beli</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Book;