import React from 'react';
import style from './footer.module.css'
import {Link} from 'react-router-dom'
const footer =()=>{
    return (
        <div className={style.footer}>
      <Link to='/about'>
        <span className={style.about}>--About--</span>
      </Link>
        </div>
    )
}





export default footer