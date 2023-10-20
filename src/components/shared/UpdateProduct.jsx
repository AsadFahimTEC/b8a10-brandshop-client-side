<<<<<<< HEAD
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const [defaultData, setDefaultData] = useState(null);

  const params = useParams();

  const {id} = params;

  useEffect(() => {
    fetch(`http://localhost:5070/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setDefaultData(data));
  }, [id]);

  console.log(defaultData);

  const navigate = useNavigate();
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    console.log(name, brandname, photo, type, price, rating);

    // new product added in the server side
    const product = {name, brandname, photo, type, price, rating};

    fetch(`http://localhost:5070/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedId) {
          Swal.fire({
            title: "success",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/products");
        }
      });
  };

  return (
    <div>
      <div className="mt-3 hero min-h-screen bg-base-200">
=======
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const navigate = useNavigate();
    const handleUpdateProduct = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const brandname = form.brandname.value;
      const photo = form.photo.value;
      const type = form.type.value;
      const price = form.price.value;
      const rating = form.rating.value;
      console.log(name, brandname, photo, type, price, description, rating);
  
      // new product added in the server side
      const product = {name, brandname, photo, type, price, description, rating};
  
    fetch("http://localhost:5070/products", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: 'success',
              text: 'Product Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
            navigate('/products');
          }
      });
    }

    return (
        <div>
            <div className="mt-3 hero min-h-screen bg-base-200">
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdateProduct} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
<<<<<<< HEAD
                  defaultValue={defaultData?.name}
=======
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandname"
<<<<<<< HEAD
                  defaultValue={`brandname`}
=======
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  placeholder="brandname"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
<<<<<<< HEAD
                  defaultValue={`photo`}
=======
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  placeholder="photo"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <select
                  name="type"
<<<<<<< HEAD
                  defaultValue={`type`}
                  className="select select-bordered text-black"
                  required>
=======
                  className="select select-bordered text-black"
                  required
                >
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  <option value="">Select a Brand</option>
                  <option value="Coca-Cola">Coca-Cola</option>
                  <option value="McDonald's">McDonald's</option>
                  <option value="Starbucks">Starbucks</option>
                  <option value="PepsiCo">PepsiCo</option>
                  <option value="Nestlé">Nestlé</option>
                  <option value="Kellogg's">Kellogg's</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
<<<<<<< HEAD
                  defaultValue={`price`}
=======
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  placeholder="price"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form control gap-5 mt-2 rating">
<<<<<<< HEAD
                <label className="label">
=======
              <label className="label">
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="radio"
<<<<<<< HEAD
                  name="rating"
                  defaultValue={`rating`}
                  value="1"
=======
                  name="rating" value="1"
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
<<<<<<< HEAD
                  name="rating"
                  defaultValue={`rating`}
                  value="2"
=======
                  name="rating" value="2"
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
<<<<<<< HEAD
                  name="rating"
                  defaultValue={`rating`}
                  value="3"
=======
                  name="rating" value="3"
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
<<<<<<< HEAD
                  name="rating"
                  defaultValue={`rating`}
                  value="4"
=======
                  name="rating" value="4"
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
<<<<<<< HEAD
                  name="rating"
                  defaultValue={`rating`}
                  value="5"
=======
                  name="rating" value="5"
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
};

export default UpdateProduct;
=======
        </div>
    );
};

export default UpdateProduct;
>>>>>>> c16d40e9540765eaf3f0ba0c292486ec2c039f13
