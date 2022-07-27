import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { GridView } from './GridView'
import { Cart } from './Cart'
import { CartView } from './CartView'

export function App() {
    const [plants, setPlants] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('/api/plants')
        .then(res => res.json())
        .then(_plants => setPlants(_plants))
        .catch(console.error)
    }, [])

    const addToCart = (plant) => {
        setCart([...cart, plant])
    }

    return (
        <section>
            <BrowserRouter>
                <header className="flex">
                    <h1 className="ml4 flex-auto"><Link to="/">PlantStore</Link></h1>
                    <article className="mr4">
                        <Cart cart={cart} />
                    </article>
                </header>
                <Routes>
                    <Route path="/" element={<GridView plants={plants} addToCart={addToCart} />}></Route>
                    <Route path="/cart" element={<CartView cart={cart}/>}></Route>
                </Routes>
            </BrowserRouter>
        </section>
    )
}