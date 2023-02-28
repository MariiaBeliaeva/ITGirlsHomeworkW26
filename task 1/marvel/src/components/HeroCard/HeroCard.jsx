import React from "react";

function HeroCard(heros) {
  return (
    <div className="hero-card">
      <img src={heros.image} alt={heros.name} />
      <h2>{heros.name}</h2>
      <p>Вселенная: {heros.universe}</p>
      <p>Альтер эго: {heros.alter}</p>
      <p>Род деятельности: {heros.occupation}</p>
      <p>Друзья: {heros.friends}</p>
      <p>Суперсила: {heros.superpower}</p>
      <p>Подробнее: {heros.more}</p>
    </div>
  );
}

export default HeroCard;
