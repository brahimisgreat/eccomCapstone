import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import Product from './modules/product';
import Productss from './modules/productss';
import CategoryProduct from './modules/CategoryProducts';
import Cart from './modules/Cart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/products' element={<Productss />}/>
        <Route path='/categories/:name' element={<CategoryProduct />}/>
        <Route path='/cart' element={<Cart />}/>

        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
