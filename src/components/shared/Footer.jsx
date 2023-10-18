import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <footer
        className="w-full bg-white p-8"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <p className="normal-case font-montserrat font-bold text-xl">
            Drinko
          </p>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link
                to="/product"
                className="block font-avenir text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-green-500 focus:text-green-500"
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block font-avenir text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-green-500 focus:text-green-500"
              >
                My Cart
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block font-avenir text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-green-500 focus:text-green-500"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <p className="block font-light font-avenir text-center text-base leading-relaxed text-blue-gray-900 antialiased">
          © 2023 Drinko
        </p>
      </footer>
    </div>
  );
};

export default Footer;
