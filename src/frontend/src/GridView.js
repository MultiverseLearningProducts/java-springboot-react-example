import { Plant } from './Plant'

export function GridView({plants, addToCart}) {

    const style = {
        display: 'grid',
        margin: '2rem auto',
        gridTemplateColumns: 'repeat(3, auto)',
        gridTemplateRows: 'repeat(3, auto)',
        gridGap: '.5rem',
        width: '80vw'
    }

    return (
        <main style={style}>
            {plants.map(plant => <Plant key={plant.id} plant={plant} addToCart={addToCart} />)}
        </main>
    )
}