import React from 'react';
import Card from './Card.jsx';

export default function Cards({cities,onClose}) {
  return (
    <div className='container-cards'>
      {
        cities.map((c,i) =>
          <Card 
            max={c.main.temp_max}
            min={c.main.temp_min}
            name={c.name}
            img={c.weather[0].icon}
            onClose={onClose}
            key={i}
          />
        )
      }
    </div>
  );
};