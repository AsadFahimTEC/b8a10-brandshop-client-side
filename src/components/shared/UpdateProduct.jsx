
import { useState } from "react";
import {useLoaderData, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const products = useLoaderData();
  const {_id,name, photo, price, rating } = products;
  console.log(products);
  const navigate = useNavigate();
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    console.log(name, photo, type, price, rating);

    // new product added in the server side
    const product = {name, photo, type, price, rating};
    console.log(product);

    fetch(`https://b8-a10-brand-shop-server-side-gold.vercel.app/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "success",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(`/products/${_id}`);
        }
      });
  };

  return (
    <div>
      <div className="mt-3 hero min-h-screen bg-base-200">
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
                  defaultValue={name}
                  className="input input-bordered text-black"
                  required
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="description"
                  className="input input-bordered text-black"
                  required
                />
              </div> */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
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
                  className="select select-bordered text-black"
                  required>
                  <option value="">Select a Brand</option>
                  <option value="Coca-Cola">Coca-Cola</option>
                  <option value="Fries">Fries</option>
                  <option value="Coffe Cup">Coffe Cup</option>
                  <option value="Pepsi">Pepsi</option>
                  <option value="Kitkat Chocolate">Kitkat Chocolate</option>
                  <option value="Corn Flakes">Corn Flakes</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="price"
                  className="input input-bordered text-black"
                  required
                />
              </div>

              <div className="form control gap-5 mt-2 rating">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating"
                  value="5"
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
    </div>
  );
};

export default UpdateProduct;
