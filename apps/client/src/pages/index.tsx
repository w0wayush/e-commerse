// pages/index.js
import { motion } from "framer-motion";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gray-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Welcome to w0wVista</h2>
          <p className="mt-4 text-lg">
            Your one-stop shop for amazing products
          </p>
          <Button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
            Shop Now
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["product1.jpg", "product2.jpg", "product3.jpg"].map(
            (product, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`/${product}`}
                  alt={`Product ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">Product {index + 1}</h3>
                  <p className="mt-4 text-gray-400">This is a great product.</p>
                  <Button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
                    Buy Now
                  </Button>
                </div>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["John Doe", "Jane Smith", "Alice Johnson"].map(
              (customer, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-lg p-6 shadow-lg"
                >
                  <p className="text-gray-300 mb-4">
                    "This is the best store ever! Highly recommend to everyone."
                  </p>
                  <h3 className="text-lg font-bold">{customer}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2023 w0wVista. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
