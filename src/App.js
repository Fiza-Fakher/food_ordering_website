import React, { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Popular from './components/Popular';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Details from './components/Details';
import Order from './components/Order';
import Menu from './components/Menu'; 
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Sign from './components/Sign';
import Delivery from './components/Delivery';
import Error from './components/Error';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // State for managing cart items
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path='/how-it-works' element={<Work />}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path="/popular" element={<Popular cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/menu" element={<Menu cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/order" element={<Order cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Order cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/login" element={<Sign />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
