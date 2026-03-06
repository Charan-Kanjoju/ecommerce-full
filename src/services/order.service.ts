import API from "../api/axios";

export const placeOrder = async () => {
  const res = await API.post("/orders");
  return res.data;
};