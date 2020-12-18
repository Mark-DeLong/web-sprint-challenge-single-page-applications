import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'

import Pizza from './Pizza'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Get yo pizza</p>
      <Link to="/">Home</Link>
      <Link to="/Pizza">Click for pizza</Link>
    <Switch>
      <Route path="/">
        <Form />
      </Route>
      <Route path="/Pizza/:itemId">
        <Item items={toppings} />
      </Route>
      <Route path="/Pizza">
        <ItemList items={toppings} />
      </Route>
    </Switch>
    </>
  );
};
export default App;
