import { useEffect, useState } from "react";
import { fetchProducts } from "../api/api"
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-100">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};
export default Home;