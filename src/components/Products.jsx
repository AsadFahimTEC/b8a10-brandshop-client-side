import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const Products = () => {
  const params = useParams();
  const {id} = params;

<<<<<<< HEAD
  const [products, setProducts] = useState(null);

  console.log(products);

  useEffect(() => {
    fetch(`http://localhost:5070/brands/${id}`)
      .then((res) => res.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div className="mb-10 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {products?.map((item) => (
        <div key={item?._id} className="mt-2">
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <div>
              <img
                src={item.photo}
                alt="coc"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {item.name}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {item?.title}
                </p>
                <div className="flex items-center gap-5">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    Price: {item?.price} $
                  </p>
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    Rating: {item?.rating} *
                  </p>
                  <div className="ml-auto">
                    <button className="bg-[red] hover:bg-[blue] font-avenir text-[white] rounded px-5 py-2">
                      Details
                    </button>
                    <Link to={`/updateproduct/${id}`}>
                      <button className="mt-3 bg-[red] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2">
                        Update
                      </button>
                    </Link>
                  </div>
=======
    return (
        <div className="mt-2">
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <div>
            <img
              src={image}
              alt="coc"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">{name}</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {title}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  $ {price}
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    $ {discount}
                  </p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      ))}
    </div>
  );
=======
      </div>
    );
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
};

export default Products;
