import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

  const location = useLocation();
  const { q = '' } = useMemo(() =>  queryString.parse(location.search), [location.search]);

  const [formValues, handleInputChange] = useForm({
    search: q,
  });
  
  const { search } = formValues;
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${search}`);
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr/>

      <div className="row">
        <div className="col-12 col-sm-5 col-lg-3">
          <h4>Search Form</h4>
          <hr/>

          <form onSubmit={handleSubmit}>
            <input type="text"
                   name="search"
                   placeholder="Find your hero"
                   className="form-control"
                   autoComplete="off"
                   value={search}
                   onChange={handleInputChange} />

            <button type="submit"
                    className="btn mt-2 btn-outline-primary">
              Search...
            </button>
          </form>
        </div>

        <div className="col-12 col-sm-7 col-lg-9 mt-4 mt-sm-0">
          <h4>Results</h4>
          <hr/>

          {
            q === '' &&
            <div className="alert alert-info">
              Search a hero
            </div>
          }

          {
            (q !== '' && heroesFiltered.length === 0) &&
            <div className="alert alert-danger">
              There is no hero with name '{q}'
            </div>
          }

          <div className="mb-2 row row-cols-1 row-cols-xl-2 g-4">
            {
              heroesFiltered.map(hero => (
                <HeroCard key={hero.id} 
                          {...hero}/>
              ))
            }   
          </div>
        </div>
      </div>
    </div>
  )
}
