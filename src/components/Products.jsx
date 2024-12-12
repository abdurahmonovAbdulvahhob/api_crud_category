import React from "react";

const Products = ({ data }) => {
  const reversedData = data?.slice().reverse();

  const productItems = reversedData?.map((product) => (
    <div
      key={product.id}
      className="w-80 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="text-lg text-end text-gray-700 mt-2 font-medium">
        {product.price}{" "}
        <span className="text-md text-green-500 mt-2 font-medium">USD</span>
      </p>
    </div>
  ));

  return (
    <div className="flex flex-wrap justify-around gap-6">
      {productItems?.length ? productItems : <p>No products available.</p>}
    </div>
  );
};

export default Products;
