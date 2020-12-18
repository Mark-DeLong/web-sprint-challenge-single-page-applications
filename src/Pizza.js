import React from 'core-js/library/fn/reflect/es7/metadata'
import { Link, userRouteMatch } from 'react-router-dom'

export default function Pizza(props) {
    const { toppings } = props

    const { url } = userRouteMatch()

    

    return (
        <div className="toppings-wrapper">
            items.map((item) => (
                <div className="pizza" key={item.id}></div>
            ))
        </div>
    )
}