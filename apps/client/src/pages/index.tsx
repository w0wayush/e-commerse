// pages/index.js
import { motion } from "framer-motion";
import { Button } from "@repo/ui/button";
import { useRecoilValue } from "recoil";
import { userEmailState } from "store";
import { useRouter } from "next/router";

const products = [
  {
    name: "Product 1",
    description: "This is a great product that solves many problems.",
    price: "$29.99",
    image:
      "https://i.pinimg.com/564x/56/73/be/5673be45a955e1a705e273666ced8a8f.jpg",
  },
  {
    name: "Product 2",
    description: "This product is known for its excellent performance.",
    price: "$49.99",
    image:
      "https://i.pinimg.com/564x/a9/c4/a5/a9c4a5d860c098f206d7c3a303e62040.jpg",
  },
  {
    name: "Product 3",
    description: "A high-quality product that meets all your needs.",
    price: "$19.99",
    image:
      "https://i.pinimg.com/564x/61/9a/f8/619af838409ff10c6e59d5695ab71777.jpg",
  },
];

export default function Home() {
  const router = useRouter();
  const userEmail = useRecoilValue(userEmailState);
  console.log(userEmail);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section
        className="bg-gray-700 py-52 bg-contain bg-center relative"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/564x/da/dc/39/dadc392d629312756d33916caf91c8d2.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Dark overlay for better text contrast */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white">Welcome to w0wVista</h2>
          <p className="mt-4 text-lg text-gray-200">
            Your one-stop shop for amazing products
          </p>
          <Button
            className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
            onClick={() => {
              userEmail ? <div></div> : router.push("/signup");
            }}
          >
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
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="mt-4 text-gray-400">{product.description}</p>
                <p className="mt-2 text-gray-200">{product.price}</p>
                <div className="mt-auto">
                  <Button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                    onClick={() => {
                      if (userEmail) {
                        console.log(`Buying ${product.name}`);
                      } else {
                        router.push("/signup");
                      }
                    }}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["John Doe", "Jane Smith", "Alice Johnson"].map(
              (customer, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 rounded-lg p-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-300 mb-4">
                    "This is the best store ever! Highly recommend to everyone."
                  </p>
                  <h3 className="text-lg font-bold">{customer}</h3>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 pt-10">
            © 2023 w0wVista. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
