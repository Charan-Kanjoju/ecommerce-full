import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";
import { addToCart } from "../services/cart.service";
import ProductCard from "../components/ProductCard";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleAddToCart = async (id: string) => {
    await addToCart(id, 1);
    alert("Added to cart");
  };

  return (

    <div className="bg-gray-100 container mx-auto py-8">

      <h1 className="text-2xl font-bold mb-6">
        Products
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={handleAddToCart}
          />
        ))}

      </div>

    </div>

  );
}