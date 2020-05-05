import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import Pokemon from './routes/Pokemon';

const RouterComp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route
                        path="/:id"
                        render={({ match }) => <Pokemon id={match.params.id} />}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default RouterComp;
