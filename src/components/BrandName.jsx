import {  useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const BrandName = () => {
    const brandname = useLoaderData();
    console.log(brandname);
//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         fetch(`http://localhost:5070/getproducts/${brandname}`)
//         .then(res => res.json())
//         .then(data =>{
//          setProducts(data); 
// });

// }, [brandname]);

  return (
        <div>
           <h1>Products By US</h1>
           <ul>
            {
                products.map((product)=> <li key={product._id}>
                    <p>Name:{product.brandname}</p>
                    <p>Name:{product.price}</p>
                    <p>Name:{product.description}</p>
                    <p>Name:{product.rating}</p>
                </li>)
            }
           </ul>
        </div>
    );
};

export default BrandName;