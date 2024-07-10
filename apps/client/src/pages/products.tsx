import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@repo/ui/productCard";

interface Product {
  _id: string;
  product: string;
  description: string;
  price: number;
  imageLink: string;
  published: boolean;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null); // State to keep track of expanded card

  const init = async () => {
    try {
      const response = await axios.get(`/api/products`);
      if (response.data && Array.isArray(response.data.products)) {
        setProducts(response.data.products);
      } else {
        console.error("Invalid API response:", response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const deleteProduct = async (userId: string) => {
    try {
      const response = await axios.post(`/api/deleteItem/${userId}`);
      console.log("Item deleted successfully:", response.data);
      init();
    } catch (error) {
      console.error("Item deletion error:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-full gap-5 p-2 mx-auto mb-10">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onClick={() => deleteProduct(product._id)}
          expanded={expandedCard === product._id}
          onReadMore={() =>
            setExpandedCard(expandedCard === product._id ? null : product._id)
          }
        />
      ))}
    </div>
  );
}
