import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import Navigation from './Navigation'
import Minions from './views/Minions.js'
import NewMinion from './views/NewMinion.js'
import Home from './views/Home.js'

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/minions" component={Minions} />
        <Route exact path="/minions/new" component={NewMinion} />
      </Container>
    );
  }
}

export default App;
