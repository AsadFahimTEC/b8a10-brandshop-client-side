import {Link} from "react-router-dom";

const AllBrand = ({brand}) => {
  const {_id, title, image} = brand || {};

  return (
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
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllBrand;
