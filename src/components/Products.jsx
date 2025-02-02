

export default function Products({handleClick}) {
    const products = [
        {
            id: 1,
            name: "Shoes-1",
            brand: "Nike",
            description: "If a dog chews shoes whose shoes does he choose?",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        },
        {
            id: 2,
            name: "Shoe-2",
            brand: "Spride",
            description: "If a dog chews shoes whose shoes does he choose?",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        },
        {
            id: 3,
            name: "Shoe-3",
            brand: "Spride",
            description: "If a dog chews shoes whose shoes does he choose?",
            img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        }

    ]




    return (
        <div>
            <h1 className="text-center text-4xl m-10 text-amber-500 font-bold">Our Products</h1>
            <div className='flex m-10 justify-center'>

                {products.map(product => (
                    <div key={product.id} className="card card-compact bg-base-100 w-96 shadow-xl m-10">
                        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={product.img}
                                    alt="Shoes-1" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <h3 className="card-title">{product.brand}</h3>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleClick(product)} className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}</div>
        </div>
    )
}