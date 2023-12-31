import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

const Details = () => {
  const [details, setDetails] = useState(null);
  const {id} = useParams();
  const detail = useLoaderData();
  console.log(detail, id);
  
  useEffect(()=>{
    fetch(`https://b8-a10-brand-shop-server-side-gold.vercel.app/products/${id}`)
    .then(res =>res.json())
    .then(data =>{
        setDetails(data);
    })
    // const findDetail = detail?.find(details =>details.id === id);
    // setDetails(findDetail);
}, [id])

console.log(details);


  return (
    <div>
      <ProductDetails details={details}></ProductDetails>
    </div>
  );
};

export default Details;
