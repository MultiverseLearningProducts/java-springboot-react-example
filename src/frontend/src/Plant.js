export function Plant({plant, addToCart}) {
    return (
        <article className="bg-center cover h5 flex flex-column justify-end pa2" style={{backgroundImage: `url(${plant.image})`}}>
            <h2 className="white">{plant.name}</h2>
            <section className="flex justify-end">
                <pre className="white mr2">£{plant.price}</pre>
                <button className="b--transparent bg-green white shadow-2 br2" onClick={() => addToCart(plant)}>Buy</button>
            </section>
        </article>
    )
}