import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from '../login/LoginScreen';
import { Marvel } from '../marvel/Marvel';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route exact path="/login" component={ LoginScreen }/>
                    <Route exact path="/" component={ Marvel }/>
                </Switch>
            </div>
        </Router>
    )
}