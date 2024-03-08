import { React, useState } from 'react'
import { Navbar, Home, Success, Cart, Error, Footer } from './components/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FooterImg from './assets/FooterImg.png'

function App() {

  const title = "Foodie's Hub";

  return (
    <>
      <BrowserRouter>
      <Navbar title={title} />
      <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Cart />
        <Footer title={title} img={FooterImg} />
      </BrowserRouter>
    </>
  )
}

export default App
