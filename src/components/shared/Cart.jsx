import {useContext, useEffect, useState} from "react";
import AllCart from "./AllCart";
import {AuthContext} from "../../Hook/AuthProvider";

const Cart = () => {
  // cart
  const [cart, setCart] = useState(null);
  const [updated, setUpdated] = useState(false);
  const {user} = useContext(AuthContext);

  const email = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5070/my-cart/${email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [email, updated]);

  return (
    <div>
      <div className="py-10 mx-5 md:mx-15 my-5 md:my-15">
        <h2 className="text-center font-bold text-4xl mb-4 font-montserrat">
          My Products Cart
        </h2>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {cart?.length === 0 ? (
            <p className="text-center text-red-500">No data found.</p>
          ) : (
            cart?.map((crt) => (
              <AllCart key={crt._id} setUpdated={setUpdated} cart={crt} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
