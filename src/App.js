import React from 'react';
import './App.scss';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Portfolio from './components/portfolio/Portfolio';
import Bio from './components/bio/Bio';
import Arsenal from './components/arsenal/Arsenal';
import Skills from './components/skills/Skills';
import Vouchers from './components/vouchers/Vouchers';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Header />
      <Portfolio />
      <Bio />
      <Arsenal />
      <Skills />
      <Vouchers />
      <Contact />
      <Footer />

      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/arsenal' element={<Arsenal />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/vouchers' element={<Vouchers />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;