import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './styles/App.css'
import LOGO from './assets/LOGO.png';
 


function App() {
  return (
    <>
<nav>
<div className="logo">
      <Link>
        <img src={LOGO} alt='logo application'/>
      </Link>
</div>
  <ul className='Liens'>   
      <Link className='LinkAccueil' to="/">Accueil</Link> 
      <Link className='Linkabout' to="/about">A propos</Link>
  </ul>
</nav>
  <Routes>
    <Route path="/" element={<Home/> }/>
    <Route path="/about" element={<About/>} />
    <Route path="*" element={<NotFound />} />
      
    <Route/>
  </Routes>

  </>
  )
}

export default App
