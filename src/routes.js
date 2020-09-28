// import all relevant pieces of react-router-dom, and all components rendered by routes
import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import VCStart from './containers/VCStart.js';
import MakePlans from './containers/MakePlans.js';
import MapsContainer from './containers/MapsContainer.js';
import ErrorRoute from './components/ErrorRoute';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/start" component={VCStart} />
        <Route path="/make-plans" component={MakePlans} />
        <Route path="/map" component={MapsContainer} />
        <Route component={ErrorRoute} />
      </Switch>
        )
}
};

export default withRouter(Routes);


