import React from 'react';
import style from './Card.module.css'
import {Link} from 'react-router-dom'
export default function Card(props) {
  // acá va tu código 
  return <div className={style.father}>
  <div className={style.card}>
     <input className={style.button} type='button' value = 'X' onClick={props.onClose}/>
     <Link to={`/ciudad/${props.id}`} >
  <h4 className={style.name}>{props.name}</h4>
</Link>
     
     
<hr className={style.linea}/>
<div className={style.header}> 
  <div className={style.parrafo}>
    <span>
        MIN:
        <br/>
        <br/>
    {props.min}
    </span>
    <span>
      MAX: 
      <br/>
      <br/>
    {props.max}
    </span>
  </div>

<div className={style.img}>
  <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}alt="imagen del clima"/>
  </div>
  </div>
  </div>
  </div>
};