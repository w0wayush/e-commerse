import React, { useState } from "react";

function ProductCard(props: {
  product: any;
  onClick: () => void;
  expanded: boolean;
  onReadMore: () => void;
}) {
  const { product, onClick, expanded, onReadMore } = props;
  const description = expanded
    ? product.description
    : `${product.description.split(" ").slice(0, 15).join(" ")}...`;

  return (
    <div
      className={`flex flex-col items-center justify-between transition duration-300 ease-in gap-3 p-4 mt-4 ml-3 rounded-xl hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] shadow-[0_3px_10px_rgb(0,0,0,0.3)] ${
        expanded ? "bg-gray-100" : "bg-white"
      }`}
      style={{ minHeight: expanded ? "auto" : "450px" }}
    >
      <div>
        <p className="text-gray-700 font-bold text-lg truncate mt-1 flex items-center justify-center w-full">
          {product.product}
        </p>
        <div className="mt-5">
          <p className="text-gray-500 w-64 font-normal text-[12px] text-left">
            {description}
            <span className="text-blue-400 cursor-pointer" onClick={onReadMore}>
              {expanded ? " show less" : " read more"}
            </span>
          </p>
        </div>
        <div className="h-[280px] mt-5">
          <img src={product.imageLink} className="rounded-xl h-full w-full" />
        </div>
        <div className="w-full mt-2 mb-2">
          <div>
            <p className="text-green-600  font-bold">Rs. {product.price}</p>
          </div>
          <div className="flex justify-center items-center gap-4 mt-7 ">
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-sm p-1 px-3 uppercase hover:bg-green-400 hover:text-gray-700 transition duration-300 ease-in"
              onClick={onClick}
            >
              Edit
            </button>
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-sm p-1 px-3 uppercase hover:bg-red-400 hover:text-white transition duration-300 ease-in"
              onClick={onClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

{
  /* <div className="m-10 w-300 min-h-200 p-20 flex flex-col justify-between border rounded-lg shadow-md">
      <div>
        <h2 className="text-center text-lg font-semibold">{product.title}</h2>
        <p className="text-center text-base">{product.description}</p>
        <img src={product.image} className="w-300" alt={product.title} />
      </div>
      <div className="flex justify-center items-center mt-10 space-x-3">
        <Button
          variant="contained"
          size="large"
          className="bg-white text-gray-700 border-2 border-gray-700 font-bold uppercase px-3 py-1 hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
        >
          Remove from Cart
        </Button>
        <Button
          variant="contained"
          size="large"
          className="bg-gray-700 text-white border-2 border-gray-700 font-bold uppercase px-3 py-1 hover:bg-gray-900 transition duration-300 ease-in"
        >
          Add to Cart
        </Button>
      </div>
    </div> */
}
