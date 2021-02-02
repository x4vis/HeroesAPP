import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Navbar } from '../ui/Navbar';
import { HeroScreen } from '../heroes/HeroScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { DcScreen } from '../dc/DcScreen';


export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/heroe/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
