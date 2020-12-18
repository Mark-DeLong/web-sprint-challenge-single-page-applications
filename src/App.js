import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import * as yup from "yup"
import schema from "../validation/formSchema"

import Pizza from './Pizza'

const initialToppingValues = {
  name: "",
  size: "",
  fetta: false,
  peppers: false,
  tomatos: false,
  spinach: false,
  special: "",
}

const initialToppingErrors = {
  name: "",
  size: "",
  special: "",
}

// const initialPizza = []
const initialDisabled = true

const App = () => {
  const [thePizza, setThePizza] = useState([])

  const [toppingValues, setToppingValues] = useState(initialToppingValues)

  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const [disabled, setDisabled] = useState(initialDisabled)


  const updateThePizza = (inputName, inputValue) => {
    setToppingValues({
      ...toppingValues,
      [inputName]: inputValue,
    })
  }

  const submitThePizza = () => {
    const newPizza = {
      name: toppingValues.name.trim(),
      size: toppingValues.size.trim(),
      fetta: toppingValues.fetta,
      peppers: toppingValues.peppers,
      tomatos: toppingValues.tomatos,
      spinach: toppingValues.spinach,
      special: toppingValues.special.trim(),
    }
  }

  useEffect( () => {
    axios.get("fakeapi.com").then( (res) => setThePizza(res.data)
    )
  }, [])


  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Get yo pizza</p>
      <Link to="/">Home</Link>
      <Link to="/Pizza">Click for pizza</Link>
    <Switch>
      <Route path="/">
        <Form 
          values={formValues}
          update={updateThePizza}
          submit={submitThePizza}

          {thePizza.map( (Pizzas) => {
            return <Pizzas key={Pizzas.id} details={Pizzas} />
          })}
        />
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
