import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "./data/products"

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [item, setItem] = useState({})

  useEffect(() => {
    getItemDetails().then(res => {
      setItem(res)
    })
  }, [])

  const getItemDetails = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(p => p.id == itemId))
      }, 500)
    })
  }

  return (
    <>
      <div>
        <div className="text-4xl my-5">
          <p>{item.name}</p>
        </div>
        <div className="container grid grid-cols-2 mx-auto">
          <figure className="max-w-sm">
            <img src={item.image.imgB} />
          </figure>
          <div className="card max-w-md">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemDetailContainer