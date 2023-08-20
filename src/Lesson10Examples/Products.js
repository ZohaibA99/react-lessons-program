import {useSearchParams, useMemo} from 'raect-router-dom';

//https://gomerch.it/products?name=hoodie&color=orange&maxPrice=500 

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const params = useMemo(
        () => Object.fromEnteries([...searchParams]), 
        [searchParams]
    );
    const {name, color, maxPrice} = params;

    console.log(maxPrice, typeof maxPrice) // "500" , "string"
 
    return(
        <div>
            <h2>{name}</h2>
            <p>{color}</p>
            <span>{maxPrice}</span>

            <input type="text"
            value={name}
            onChange={e => setSearchParams({name: e.target.value})}></input>
        </div>
    )
}
