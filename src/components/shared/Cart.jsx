import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCart from "./AllCart";


const Cart = () => {
    const myCarts = useLoaderData();
    // console.log(myCarts);
    const [carts, setCarts] = useState(myCarts)

    return (
        <div>
           <div className="py-10 mx-5 md:mx-15 my-5 md:my-15">
             <h2 className="text-center font-bold text-4xl mb-4 font-montserrat">My Products Cart</h2>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {carts.length === 0 ? (
          <p className="text-center text-red-500">No data found.</p>
        ) : (
            carts?.map((crt) => <AllCart key={crt._id} cart={crt} />)
        )}
      </div>
    </div> 
        </div>
    );
};

export default Cart;