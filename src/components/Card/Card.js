import React from 'react';
import stales from './Card.module.css';

function Card(props) {

  const foo = (item) => {
    if(item === 'card 1'){
      console.log(`like ${props.title}`)
    }else{
      console.log(`like ${props.title}`)
    }
  }

  foo(props.title)

  return (
    <div className={stales.card}>
    <h3>{props.title}</h3>
    <img src='../img/react-hexagon.png' alt='img'/>
    {/*  почему то не находит путь к картинке ,в чем можеь юыть проблема?*/}
    <button onClick={foo}>like</button>
    </div>

  )
}

export default Card;