import { useEffect, useState } from "react";
import { getCart } from "../services/cart.service";
import { placeOrder } from "../services/order.service";
import { Button } from "@/components/ui/button";

export default function Cart() {

  const [cart, setCart] = useState<any>(null);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const data = await getCart();
    setCart(data);
  };

  const order = async () => {
    await placeOrder();
    alert("Order placed!");
  };

  return (

    <div className="container mx-auto py-8">

      <h1 className="text-2xl font-bold mb-6">
        Your Cart
      </h1>

      {cart?.items?.map((item: any) => (

        <div
          key={item.id}
          className="border p-4 rounded mb-3 flex justify-between"
        >

          <div>
            <p className="font-semibold">
              {item.product.title}
            </p>

            <p>Qty: {item.quantity}</p>
          </div>

        </div>

      ))}

      <Button
        className="mt-4"
        onClick={order}
      >
        Place Order
      </Button>

    </div>

  );
}