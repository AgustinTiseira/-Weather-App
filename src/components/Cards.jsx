
import React from 'react';
import style from './Cards.module.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className={style.cards}>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          id={c.id}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
}