import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import style from './SearchBar.module.css'
import {Link} from 'react-router-dom'

function Nav({onSearch}) {
  return (
    <nav className={style.nav}>
      <Link to='/'>
          <img id="logoHenry" src={Logo} width="30" height="30" className={style.imagen} alt="" />
          <span className={style.parrafo}>
          Henry - Weather App
        </span>
      </Link>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};
export default Nav;
