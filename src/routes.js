import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Repositories from './pages/Repositories';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch >
                <Route path='/' exact component={Home}></Route>
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}