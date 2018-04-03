import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Navigation from './Navigation'
import Minions from './views/Minions.js'
import NewMinion from './views/NewMinion.js'
import MinionDetail from './views/MinionDetail.js'
import Home from './views/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Switch>
          <Route path="/minions/new" component={NewMinion} />
          <Route path="/minions/:id" component={MinionDetail} />
          <Route path="/minions" component={Minions} />
          <Route path="/" component={Home} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
