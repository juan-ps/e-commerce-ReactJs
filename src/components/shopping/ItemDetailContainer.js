import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "./data/products"

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [item, setItem] = useState({});

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

  const shortInfo = item.shortInfo.map((info) => <li>{info}</li>);

  return (
    <>
      <div>
        <div className="text-4xl my-5">
          <p><strong>{item.name}</strong></p>
        </div>
        <div className="container min-h-screen grid grid-cols-3 grid-rows-2 mx-auto">
          <figure className="max-w-sm row-span-2">
            <img src={item.image.imgA} />
          </figure>
          <div className="card max-w-md text-center">
            <p>{item.description}</p>
          </div>
          <div className="text-center">
             {shortInfo}
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemDetailContainer