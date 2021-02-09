import React,{useState} from 'react';
import style from "./SearchBar.module.css"
import {Link} from 'react-router-dom'

export default function SearchBar({onSearch}) {
  const [estado, setEstado] = useState("");
  const onChange=(e)=>{
    let newEstado = e.target.value
    setEstado(newEstado)
  }
  const click = (e) =>{
    e.preventDefault();
    onSearch(estado)
    
  }
  return <form  onSubmit={click} className={style.barra}>
    <input type="text" onChange={onChange} placeholder="Agregar ciudad..." />
    
    <input  value="Agregar"type="submit" className={style.button} />
    
  </form>
};