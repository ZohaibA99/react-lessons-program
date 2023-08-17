import React from 'react';
import {Link} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

export default function Products () {
    const productsData = [
        {
            id: uuidv4(),
            name: 'potatoe',
        }, 
        {
            id: uuidv4(),
            name: 'Orange',
        },
        {
            id: uuidv4(),
            name: 'Cucumber',
        },
        {
            id: uuidv4(),
            name: 'Watermelon',
        },
            
    ];

    const productsMarkup = productsData.map(({id, name}) => {
       return (
        <div>
            <br></br>
            <Link key={id} to={`/products/product/${id}/${name}`}>{name}</Link>
        </div> 
       );
    })

    return (
        <>
            <div>Products Page</div>
            <div>{productsMarkup}</div>
        </>
    )
}