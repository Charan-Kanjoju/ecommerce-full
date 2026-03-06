import API from "../api/axios";

export const addToCart = async (productId: string, quantity: number) => {
  const res = await API.post("/cart", {
    productId,
    quantity,
  });

  return res.data;
};

export const getCart = async () => {
  const res = await API.get("/cart");
  return res.data;
};