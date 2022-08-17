import React from 'react'
import { Link } from 'react-router-dom'

export function Cart({cart}) {
    return (
        <section>
            <h1>{cart.length ? <mark className="bg-green br-100 white">({cart.length})</mark> : null}<Link to="/cart">🛒</Link></h1>
        </section>
    )
}