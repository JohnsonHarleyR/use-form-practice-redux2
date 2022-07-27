import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Home from './pages/Home';
import Libs from './pages/Libs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/libs/">
            <Libs />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
