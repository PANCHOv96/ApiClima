import React from 'react';
import Btn_cerrar from '../img/btn_cerrar.svg'

export default function Card({max,min,name,img,onClose}) {
  return (
    <div className='contenedor-tarjeta'>
      <h2 className='title'>{name}</h2>
      <div className='contenedor-datos'>
        <div>
          <h6>Min</h6>
          <p>{min}°</p>
        </div>
        <div className='cerrar'>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={img} />
          <img src={Btn_cerrar} className='btn-cerrar' onClick={() => onClose()} alt='Cerrar' />
        </div>
        <div>
          <h6>Max</h6>
          <p>{max}°</p>
        </div>
      </div>
    </div>
  )
};