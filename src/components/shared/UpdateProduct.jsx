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
                  required
                >
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
                  name="rating" value="1"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating" value="2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating" value="3"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating" value="4"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating" value="5"
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