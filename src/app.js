import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from './app.css';

const Home = () => (
  <h1>Hello World</h1>
);

const Parrot = ({ match }) => (
  <h1 className={styles.gray}>Hello {match.params.path}</h1>
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:path" component={Parrot} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
