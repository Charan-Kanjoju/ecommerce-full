import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="border-b bg-white">

      <div className="container mx-auto flex justify-between items-center h-16">

        <Link to="/" className="text-xl font-bold">
          MyShop
        </Link>

        <div className="flex gap-4">
          <Link to="/cart">Cart</Link>

          <Button variant="destructive" onClick={logout}>
            Logout
          </Button>
        </div>

      </div>

    </div>
  );
}