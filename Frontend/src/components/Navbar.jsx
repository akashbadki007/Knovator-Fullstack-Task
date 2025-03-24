import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-800 text-white p-4 flex justify-between items-center">
      
      <Link to="/" className="text-xl font-bold">E-Commerce</Link>

      <Link 
        to="/cart"
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-yellow-300 hover:text-black font-semibold"> 
        🛒 Cart 
      </Link>

    </header>
  );
};

export default Navbar;
