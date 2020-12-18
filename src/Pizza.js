import React from 'core-js/library/fn/reflect/es7/metadata'
import { Link, userRouteMatch } from 'react-router-dom'

export default function Pizza(props) {
    const { values, updateThePizza, submitThePizza, disabled, errors } = props

    const onSubmit = event => {
        event.preventDefault()
        submitThePizza()
    }

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        updateThePizza(name, valueToUse)
    }

    return (
       <div>
           <h1>Pizza Maker</h1>
           <div className="pizzaimg">
               <img src="../../Assets/Pizza/jpg" alt="just a pizza" />
           </div>
           <h2>Choose your toppings</h2>

           <form onSubmit={onSubmit}>
               <div className="orderName">
                   <h3>Enter your name</h3>
                   <label>
                       <input 
                            type="text"
                            value={values.name}
                            name="name"
                            onchange={onChange}
                        />
                   </label>
               </div>
               <div className="size">
                   <h3>Choose Size</h3>
                   <label>
                       <select
                            onChange={onChange}
                            value={values.size}
                            name="size"
                            >
                            <option value="">Choose a Size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                   </label>
               </div>
               <div className="toppings">
                <h3>Pick Toppings</h3>
                
                <label>
                    Fetta
                    <input 
                    type="checkbox"
                    name='fetta'
                    checked={values.fetta}
                    onChange={onChange}
                    />
                </label>
                <br/>
                <label>
                    Peppers
                    <input 
                    type="checkbox"
                    name='peppers'
                    checked={values.suasage}
                    onChange={onChange}
                    />
                </label>
                <br/>
                <label>
                    Tomatos
                    <input 
                    type="checkbox"
                    name='tomatos'
                    checked={values.chicken}
                    onChange={onChange}
                    />
                </label>
                <br/>
                <label>
                    Spinach
                    <input 
                    type="checkbox"
                    name='spinach'
                    checked={values.spinach}
                    onChange={onChange}
                    />
                </label>
                <br/>
                </div>
                <div className="special">
                    <h3>Special Requests</h3>
                <label>
                    <input
                    type="text"
                    value={values.special}
                    name='special'
                    onChange={onChange}
                    />
                </label>
                </div>
                <br/>
                <button disabled={disabled}>Submit</button>
                <br/>
                <br/>
           </form>
       </div>
    )
}