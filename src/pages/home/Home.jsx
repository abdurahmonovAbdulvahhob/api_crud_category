import React, { useEffect, useState } from "react";
import { request } from "@/api";
import Products from "@/components/Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request
      .get("/product/get")
      .then((res) => setProducts(res.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 via-gray-600 to-slate-900 flex flex-col items-center text-gray-100">
      <div className="w-full max-w-4xl text-center my-10">
        <h2 className="text-6xl font-extrabold mb-6 drop-shadow-md">
          Products
        </h2>
      </div>

      <div className="w-full max-w-6xl bg-gray-100 text-gray-900 p-8 rounded-2xl shadow-2xl">

        <Products data={products} />
      </div>

    </div>
  );
};

export default Home;
