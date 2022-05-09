import React from 'react';

const Card = ({
    info, openModal
  }) => {
    const {
      planet, parentstartype, relativeearthmass, lightyearsfromearth 
    } = info;
  
    return (
      <article className="card planetCard">
        <div className="planetHeadContainer">
          <h3 className="planetName">{planet}</h3>
        </div>
        <ul className="planetDetailsList">
          <li className="planetDetail">Planet Name: {planet}</li>
          <li className="planetDetail">Parent Star Type: {parentstartype}</li>
          <li className="planetDetail">Relative Earth Mass: {relativeearthmass}</li>
          <li className="planetDetail">Distance from Earth: {lightyearsfromearth}</li>
        </ul>
      </article>
    );
  };

export default Card;