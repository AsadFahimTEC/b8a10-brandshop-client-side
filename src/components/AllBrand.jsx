<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13

const AllBrand = ({brand}) => {
  const {_id, title, image} = brand || {};

  return (
<<<<<<< HEAD
    <Link to={`/products/${_id}`}>
      <div className="mt-2">
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <div>
            <img
              src={image}
              alt="coc"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <p className="text-lg font-bold text-black truncate block capitalize">
                {title}
=======
    <div className="mt-2">
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <div>
          <img
            src={image}
            alt="coc"
            className="h-80 w-72 object-cover rounded-t-xl"
          />
          <div className="px-4 py-3 w-72">
            <Link to="/products">
            
            <span className="text-gray-400 mr-3 uppercase text-xs">{name}</span>
            
            </Link>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {title}
            </p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">
                $ {price}
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllBrand;
