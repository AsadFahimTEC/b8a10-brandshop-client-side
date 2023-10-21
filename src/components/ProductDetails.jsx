import { Link } from "react-router-dom";

 const ProductDetails = ({ details }) => {

  const { name, description, photo, price, rating } = details || {};

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="relative flex w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-76 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={photo} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <p className="mt-2 block text-4xl text-red-500 font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2">
            Product Name: {name}
          </p>
          
          <div className="mb-2 flex items-center justify-between">
          <p className="mt-2 block text-2xl text-green-500 font-avenir font-bold leading-normal antialiased p-[2px] mb-2">
            User Rating: {rating}
          </p>
          <Link to={`/addproduct`}>
          <button className="p-3 rounded font-bold bg-blue-600 hover:bg-green-600 text-white">
                  Add to Cart
                </button> </Link>
          <p className="block text-base font-bold text-[#000]  leading-relaxed antialiased">
              Price: {price}$
            </p>
          </div>
          <p className="block text-base text-[gray] font-normal leading-relaxed antialiased">
              Short Description: {description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
