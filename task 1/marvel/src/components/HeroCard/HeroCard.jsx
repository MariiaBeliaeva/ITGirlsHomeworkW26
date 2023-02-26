import React from "react";

function HeroCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img className="img_card" src={props.imgLink} alt={props.name} />
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">Вселенная: {props.universe}</p>
        <p className="card-text">Альтер-эго: {props.ego}</p>
        <p className="card-text">Род деятельности: {props.job}</p>
        <p className="card-text">Друзья: {props.friends}</p>
        <p className="card-text">Суперспособности: {props.power}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">Подробнее: {props.other}</p>
      </div>
    </div>
  );
}

export default HeroCard;
