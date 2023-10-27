import React from 'react';
import './App.scss';
import Headers from 'components/Header';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ProductFeature from 'features/Product';
import CartFeature from 'features/cart';

function App() {
  return (
    <div>
      <Headers />

      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={CartFeature} />
      </Switch>
    </div>
  );
}

export default App;
