import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios'
import * as yup from "yup"
import schema from "./formSchema"
import LandingPage from "./LandingPage"
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

const App = () => {
  const [thePizza, setThePizza] = useState([])
  const [toppingValues, setToppingValues] = useState(initialToppingValues)
  const [disabled, setDisabled] = useState(true)


  const updateThePizza = (inputName, inputValue) => {
    setToppingValues({
      ...toppingValues,
      [inputName]: inputValue,
    })
  }

  // const submitThePizza = () => {
  //   const newPizza = {
  //     name: toppingValues.name.trim(),
  //     size: toppingValues.size.trim(),
  //     fetta: toppingValues.fetta,
  //     peppers: toppingValues.peppers,
  //     tomatos: toppingValues.tomatos,
  //     spinach: toppingValues.spinach,
  //     special: toppingValues.special.trim(),
  //   }
  // }

  useEffect( () => {
    schema.isValid(toppingValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  const addPizza = () => {
    axios
      .post('https://reqres.in/api/users', toppingValues)
      .then(res => {
        setThePizza([...thePizza, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally( () => {
        setToppingValues(initialToppingValues)
      })
  }


  return (
    <>
      <h1>Lambda Eats</h1>
      <p>Get yo pizza</p>
      <Link to="/">Home</Link>
      <Link to="/Pizza">Click for pizza</Link>
    <Switch>
    <Route path="/Pizza">
        <Pizza values={toppingValues} updateThePizza={updateThePizza} submitThePizza={addPizza} disabled={disabled} />
      </Route>
      
      <Route path="/">
        <Form 
          values={formValues}
          update={updateThePizza}
          submit={submitThePizza}

        />
      </Route>
      
    </Switch>
    </>
  );
};
export default App;
