import React, { useEffect, useState } from "react"
import { products } from "./data/products"
import { Link } from "react-router-dom"
import SearchSidebar from "./SearchSidebar"
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

const ItemListContainer = () => {

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
            }, 1500);
        })
    }

    return (
        <>
            <div className="text-5xl font-bold mx-auto my-5 text-center">
                <p>LISTA DE PRODUCTOS</p>
            </div>
            <div className="container min-h-screen mx-auto my-5 grid grid-cols-2 md:grid-cols-3 md:px-8 lg:grid-cols-5 gap-5">
                <div>
                    <SearchSidebar/>
                </div>
                {loading ? <div className="col-span-1 md:col-span-2 lg:col-span-4"><Loader /></div> : 
                <div className="container col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:px-4 lg:grid-cols-3 gap-5 mx-auto justify-evenly">
                
                    {items.map(i => <ItemCard key={i.id} {...i} />)}
                </div>
                }
            </div>
        </>
    )
}

export default ItemListContainer