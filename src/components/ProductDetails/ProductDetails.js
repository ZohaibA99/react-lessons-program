import React from 'react';
import {useParams} from 'react-router-dom';

function ProductDetails() {
    const {productId, name} = useParams();
    console.log({productId});

    return (
        <div>product details page. Id {productId} name: {name}</div>
    )
}

export default ProductDetails;