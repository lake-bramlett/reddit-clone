import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import NewPostForm from './components/NewPostForm';

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
            <Route exact path="/" render={()=><Home />} />
            <Route exact path="/new_post" render={()=><NewPostForm />} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
