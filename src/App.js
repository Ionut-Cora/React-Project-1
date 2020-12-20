import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Page404 from './pages/Page404';

class App extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='*' component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
