import Link from "next/link";
import ProductCard from "src/components/products/ProductCard";
import Navbar from "src/components/global/Navbar";
import Footer from "src/components/global/Footer";

const products = [
  {
    id: "prod_1",
    name: "Basic Plan",
    price: 299,
    description: "Entry level subscription",
  },
  {
    id: "prod_2",
    name: "Premium Plan",
    price: 499,
    description: "Advanced features included",
  },
  {
    id: "prod_3",
    name: "Enterprise Plan",
    price: 999,
    description: "Full access to all features",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <Navbar />

      <main>
        <h1 className="text-3xl font-bold mb-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
