import { Routes, Route } from 'react-router-dom';

// Import komponen layout
import Header from './components/Header';
import Footer from './components/Footer';

// Import komponen halaman
import Home from './pages/Home';
import Book from './pages/Book';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Login from './pages/Login';     
import Register from './pages/Register'; 

function App() {
  return (
    <>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />         
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      
      <Footer />
    </>
  );
}

export default App;