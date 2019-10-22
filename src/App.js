import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Artists from './pages/Artists';
import Artist from './pages/Artist';
import Album from './pages/Album';
import './App.css';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/artists/:id" component={Artist} />
        <Route exact path="/albums/:id" component={Album} />
      </Switch>
    </Router>
  );
}

export default App;
