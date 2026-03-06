import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }: any) {
  return (
    <Card className="hover:shadow-xl transition hover:scale-[1.02]">
      <Link to={`/product/${product.id}`}>
        <CardContent className="p-4">
          <img
            src={product.productImg}
            className="h-40 w-full object-contain"
          />

          <h3 className="font-semibold mt-3">{product.title}</h3>

          <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
        </CardContent>
      </Link>

      <CardFooter>
        <Button className="w-full" onClick={() => addToCart(product.id)}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
