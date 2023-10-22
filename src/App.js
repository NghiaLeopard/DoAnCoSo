import React from 'react';
import './App.scss';
import Headers from 'components/Header';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ProductFeature from 'features/Product';

function App() {
  return (
    <div>
      <Headers />

      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
