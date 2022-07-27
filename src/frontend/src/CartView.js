import React, { useReducer } from 'react'

export function CartView({cart}) {
    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            return total + item.price
        }, 0).toFixed(2)
    }
    return (
        <section className="w5 center bg-light-gray pa4 br3">
            <h2>Your Cart</h2>
            <ol>
                {cart.map(item => {
                    return <li key={item.id}>{item.name} £{item.price}</li>
                })}
            </ol>
            <h3>Total £{getCartTotal()}</h3>
        </section>
    )
}