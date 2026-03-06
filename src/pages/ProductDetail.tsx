import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../services/product.service";
import { addToCart } from "../services/cart.service";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const data = await getProductById(id!);
    setProduct(data);
  };

  const handleAddToCart = async () => {
    await addToCart(product.id, 1);
    alert("Added to cart");
  };

  if (!product) return <div className="p-10">Loading...</div>;

  return (

    <div className="container mx-auto py-10">

      <div className="grid grid-cols-2 gap-10 bg-white p-10 rounded-lg shadow">

        <img
          src={product.productImg}
          className="w-full h-96 object-contain"
        />

        <div>

          <h1 className="text-3xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-green-600 mb-6">
            ₹{product.price}
          </p>

          <Button
            className="bg-black text-white px-6 py-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

        </div>

      </div>

    </div>

  );
}