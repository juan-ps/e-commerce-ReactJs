import React, { useEffect, useState } from "react"
import { products } from "./data/products"
import { Link } from "react-router-dom"
import Loader from "../design/Loader"

export const ItemCard = ({ id, name, price, image }) => {
    return (
        <>
            <div className="card-normal border-4 glass">
                <Link to={`/itemlist/product/${id}`}>
                    <div className="mx-auto">
                        <figure className="absolute transition ease-out delay-130 duration-300 hover:scale-105 hover:opacity-0 ">
                            <img className="mx-auto aspect-[1000/1350]" src={image.imgA} />
                        </figure>
                        <figure>
                            <img className="mx-auto aspect-[1000/1350]" src={image.imgB} />
                        </figure>
                    </div>
                </Link>
                <div className="card-body">
                    <Link to={`/itemlist/product/${id}`}>
                        <div className="card-title mx-auto">
                            <p className="text-center font-bold">{name}</p>
                        </div>
                    </Link>
                    <div className="mx-auto">
                        <p>${price}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <div className="mx-auto my-3">
                        <Link to={'/cart'}>
                            <button className="btn btn-neutral p-3">Comprar!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const ItemList = () => {

    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts().then(
            res => {
                setLoading(false);
                setItems(res);
            })
    }, [])

    const getProducts = () => {
        return new Promise(res => {
            setTimeout(() => {
                res(products)
            }, 3000);
        })
    }

    return (
        <>
            {loading ? <div className="min-h-screen"><Loader /></div> :
                <div className="container mx-auto my-5">
                    <div className="container grid grid-cols-2 md:grid-cols-2 md:px-8 lg:grid-cols-4 gap-10 mx-auto justify-evenly">
                        {items.map(i => <ItemCard key={i.id} {...i} />)}
                    </div>
                </div>
            }
        </>
    )
}
export default ItemList