import './Card.css'

function Card(){
    const getProducts = () => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return(
        <main>
            <div className="cardProduct"> 
                <h1> Produto </h1>
                <button onClick={getProducts}> gerar json </button>
            </div>
        </main>
    )   
}

export default Card

