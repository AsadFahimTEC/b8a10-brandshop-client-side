import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/drin2.png'

const Navbar = () => {
    const navLinks = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/cart">My Cart</NavLink>
          </li>
        </>
      );

    return (
        <div className="navbar bg-green-300">  
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu font-avenir menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-300 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <h6 className="normal-case font-montserrat font-bold text-xl">
            Drinko
          </h6>
          <div className="ml-4">
          <img className="w-14 h-10 sm:w-16 sm:h-10" src={logo} alt="logo" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-avenir menu-horizontal px-1">{navLinks}</ul>
        </div>
  
        <div className="navbar-end">
          {/* {user?.displayName ? ( */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {/* <img src={user.photoURL} alt={user.displayName} /> */}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {/* {user.displayName} */}
                  </button>
                </li>
                <li>
                  <button
                    // onClick={handleLogOut}
                    className="font-avenir mr-10 px-2 py-1 rounded bg-purple-800 text-white"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          {/* ) : ( */}
            <Link to="/login">
              <button className="font-avenir mr-10 px-3 py-1 rounded bg-purple-800 text-white">
                Login
              </button>
            </Link>
          {/* )} */}
        </div>
      </div>
    );
  };

export default Navbar;