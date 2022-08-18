import React from 'react'

export function CartView({cart, removeFromCart, decrement, increment}) {
    const getCartTotal = () => {
        return Array.from(cart.keys()).reduce((total, item) => {
            return total + item.price
        }, 0).toFixed(2)
    }

    return (
        <section className="w-75 center bg-light-gray pa4 br3">
            <h2>Your Cart</h2>
            <ol>
                {Array.from(cart.keys()).map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.name} £{item.price}</span>
                            <span>
                                <button className="ml2 b--silver dib" onClick={() => decrement(item)}>-</button>
                                <mark className="bg-white mh2">{cart.get(item)}</mark>
                                <button className="b--silver dib">+</button>
                            </span>
                            <button className="remove-item b--transparent dib" onClick={e => removeFromCart(item)}>❌</button>
                        </li>
                    )
                })}
            </ol>
            <h3>Total £{getCartTotal()}</h3>
        </section>
    )
}