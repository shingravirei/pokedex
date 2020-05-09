import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './routes/Home';
import Pokemon from './routes/Pokemon';
import Type from './routes/Type';

const RouterComp = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route
                        path="/pokemon/:id"
                        render={({ match }) => <Pokemon id={match.params.id} />}
                    />
                    <Route
                        path="/type/:type"
                        render={({ match }) => (
                            <Type type={match.params.type} />
                        )}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default RouterComp;
