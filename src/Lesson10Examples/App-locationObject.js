import {useEffect} from "react";
import {useLocation, Link} from 'react-router-dom';
import Analytics from 'path/to/Analytics.js';

export const App = () => {
    const location = useLocation();

    useEffect(
        Analytics.send(location), 
     [location])

    return <div></div>
}

//implementation of back button
const Products = () => {
    return (
        <>
            <Link to ='/products/h1' state={{from: "/dashboard?name=hoodie"}}></Link>
            {name}
            {price}
            {color}
        </>
    )
}

const ProductsDetails = () => {
    const location = useLocation();
    console.log(location.state);

    return <Link to={location.state.from}>Back to products list page</Link>
}