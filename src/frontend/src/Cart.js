import React from 'react'
import { Link } from 'react-router-dom'

export function Cart({cart}) {
    const qtys = Array.from(cart.values()).reduce((sum, qty) => sum + qty, 0)
    return (
        <section>
            <h1>{qtys ? <mark id="cart-amount" className="bg-green br-100 white">({qtys})</mark> : null}<Link to="/cart">🛒</Link></h1>
        </section>
    )
}