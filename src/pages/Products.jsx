import React from 'react'
import { Link, useNavigate } from 'react-router'


export const products = [
  { id: 1, name: "Iphone 17 pro max" },
  { id: 2, name: "Iphone 18 pro max" },
  { id: 3, name: "Iphone 12 pro max" },
  { id: 4, name: "Iphone 10 pro max" },
  { id: 5, name: "Samsung S 25" },
];


const Products = () => {
    const navigation = useNavigate()
    return (
        <div className='pt-20'>
            {
                products.map((el)=>{
                    return <div>
                        <p>{el.name}</p>
                        <button className='cursor-pointer' onClick={()=> navigation(`/products/${el.id}`)} >Info</button>
                    </div>
                })
            }
        </div>
    )
}

export default Products