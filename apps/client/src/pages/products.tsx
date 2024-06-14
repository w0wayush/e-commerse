import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@repo/ui/productCard";

interface Product {
  _id: string;
  // Add other properties here based on your product structure
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl p-2 mx-auto min-h-screen">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
