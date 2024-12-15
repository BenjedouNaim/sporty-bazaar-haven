import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";

const products = [
  {
    id: 1,
    title: "Pro Running Shoes",
    price: 129.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 2,
    title: "Training Shorts",
    price: 34.99,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1519753938087-5592be888c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 3,
    title: "Sports Watch",
    price: 199.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 4,
    title: "Yoga Mat",
    price: 49.99,
    category: "Equipment",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;