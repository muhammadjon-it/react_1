import React from 'react'
import { products } from './Products'
import { useParams } from 'react-router';

const ProductById = () => {
     const { id } = useParams();
    const product = products.find((e) => e.id == id)
    return (
        <div className="pt-20">
            {product?.name}
        </div>
    )
}

export default ProductById