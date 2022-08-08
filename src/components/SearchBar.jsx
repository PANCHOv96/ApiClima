import React from 'react';
import Btn_buscar from '../img/btn_buscar.svg'

export default function SearchBar({onSearch}) {
  return (
    <div className='Buscador'>
      <input type="text" id='buscador' placeholder='Ciudad...' />
      <img src={Btn_buscar} onClick={() => onSearch(document.getElementById('buscador').value)} alt='Buscar' />
    </div>
  )
};