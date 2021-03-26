import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import View from './View';
export default function App() {
    return (
        <>
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/view' component = {View} />
        </Switch>
        </>
    )
}
