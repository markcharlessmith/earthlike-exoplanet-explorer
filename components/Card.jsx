import React from 'react';

const Card = ({
    info, openModal
  }) => {
    const {
      planet, parentstartype, relativeearthmass, lightyearsfromearth 
    } = info;
  
    // const Data = films.map((film, i) => (
    //   <li key={i} className="charFilm">
    //     - {film.title} <span className="icon"><FAIcon icon={faQuestionCircle} size="xs" style={{color: 'steelBlue'}} onClick={e => openDetailsModal(e, 'film', film.id)} /></span>
    //   </li>
    // ));
  
    // const openDetailsModal = (e, type, id) => {
    //   const top = e.pageY;
    //   const left = e.pageX;
    //   openModal(type, { top, left }, id);
    // };
  
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