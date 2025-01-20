import React from 'react'

export default function Products() {
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


/*   
    const product_1 ={
        id: 1,
        name: "Shoes-1",
        brand: "Nike",
        description: "If a dog chews shoes whose shoes does he choose?",
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    }
    const product_2 ={
        id: 2,
        name: "Shoe-1",
        brand: "Spride",
        description: "If a dog chews shoes whose shoes does he choose?",
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    }
    const product_3 ={
        id: 2,
        name: "Shoes-3",
        brand: "Poma",
        description: "If a dog chews shoes whose shoes does he choose?",
        img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    }
*/


/*    
    return (
            <div>
                <h1 className="text-center text-4xl m-10 text-amber-500 font-bold">Our Products</h1>
                <div className='flex m-10 justify-center'>


                    <div className="card card-compact bg-base-100 w-96 shadow-xl m-10">
                        <figure>
                            <img
                                src={product_1.img}
                                alt="Shoes-1" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product_1.name}</h2>
                            <h3 className="card-title">{product_1.brand}</h3>
                            <p>{product_1.description}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleClick(product_1)} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl m-10">
                        <figure>
                            <img
                                src={product_2.img}
                                alt="Shoes-2" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product_2.name}</h2>
                            <h3 className="card-title">{product_2.brand}</h3>
                            <p>{product_2.description}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleClick(product_2)} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 w-96 shadow-xl m-10">
                        <figure>
                            <img
                                src={product_3.img}
                                alt="Shoes-3" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product_3.name}</h2>
                            <h3 className="card-title">{product_3.brand}</h3>
                            <p>{product_3.description}</p>
                            <div className="card-actions justify-end">
                                <button onClick={() => handleClick("product_3 = 0")} className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
*/

    const handleClick = (item) => {
        console.log(item)
    }

    return (
        <div>
            <h1 className="text-center text-4xl m-10 text-amber-500 font-bold">Our Products</h1>
            <div className='flex m-10 justify-center'>

                {products.map(product => (
                    <div className="card card-compact bg-base-100 w-96 shadow-xl m-10">
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