import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Reader from '../../Pages/Reader/Reader';
import Links from '../../Pages/Links/Links';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
    <h1>English Words</h1>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/reader'>Reader</Link>
      <Link to='/links'>Links</Link>
    </nav>

      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/reader' element={<Reader/>}>Reader</Route>
        <Route path='/links' element={<Links/>}>Links</Route>
      </Routes>
  
    </header>
  )
}

export default Header