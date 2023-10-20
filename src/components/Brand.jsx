import {useState} from "react";
import {useLoaderData} from "react-router-dom";
import AllBrand from "./AllBrand";

const Brand = () => {
  const intialBrands = useLoaderData();
  const [brand, setBrand] = useState(intialBrands);
  // console.log(intialBrands);

  return (
    <div>
      <div className="py-10 mx-5 md:mx-15 my-5 md:my-15">
        <h2 className="text-center font-bold text-4xl mb-4 font-montserrat">
          Our Beverage Product
        </h2>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {brand.length === 0 ? (
            <p className="text-center text-red-500">No data found.</p>
          ) : (
            brand?.map((bnd) => <AllBrand key={bnd.id} brand={bnd} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Brand;
