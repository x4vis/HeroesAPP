import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}) => {
  return (
    <div className="col">
      <div className="card mx-auto" style={ { maxWidth: 540 } }>
        <div className="row g-0">
          <div className="col-md-4">
            <img className="card-img" 
                 src={`./assets/heroes/${id}.jpg`} 
                 alt={ superhero }/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {
                alter_ego !== characters &&
                <p className="card-text">{characters}</p>
              }

              <p className="card-text">
                <small className="card-text">{first_appearance}</small>
              </p>

              <Link to={`./hero/${id}`}>
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
