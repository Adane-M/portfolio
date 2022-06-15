import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './componenets/Portfolio.js';
import Nav from './componenets/Nav';
import Header from './componenets/Header';
import Footer from './componenets/Footer.js';
import './App.css';



function App() {

  return (
    <>
      <BrowserRouter>

        <div>
          <Header/>
          <Nav />
          <hr />
          <Routes>
            <Route path='/' element={<Portfolio />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );

};

export default App;
