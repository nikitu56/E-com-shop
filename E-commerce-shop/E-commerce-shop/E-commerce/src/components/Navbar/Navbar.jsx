import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ handleOrderPopup, isLoggedIn, onLogout, cartItems = [] }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link to="/" className="font-bold text-xl items-center flex gap-1">
              <FiShoppingBag size="30" />
              ShopMe
            </Link>
          </div>

          {/* Search & Buttons */}
          <div className="flex justify-between items-center gap-4">
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Cart Icon with Badge */}
            <div className="relative cursor-pointer">
              <FaCartShopping className="text-2xl text-white drop-shadow-sm" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold w-6 h-6 flex items-center justify-center rounded-full shadow-md animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </div>

            {/* Login/Logout */}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-all duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-all duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {[
            { id: 1, name: "Home", link: "/" },
            { id: 2, name: "Top Rated", link: "/top-rated" },
            { id: 3, name: "Kids Wear", link: "/kids-wear" },
            { id: 4, name: "Mens Wear", link: "/mens-wear" },
            { id: 5, name: "Woman Wear", link: "/woman-wear" },
          ].map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <span className="flex items-center gap-[2px] py-2 cursor-pointer">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {[
                  { id: 1, name: "Trending Products", link: "/top-rated" },
                  { id: 2, name: "Best Selling", link: "/top-rated" },
                  { id: 3, name: "Top Rated", link: "/top-rated" },
                ].map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;



