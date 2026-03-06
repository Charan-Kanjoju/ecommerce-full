import { useState, useContext } from "react";
import { loginUser } from "../services/auth.service";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = async (e: any) => {
    e.preventDefault();

    const data = await loginUser(form);

    login(data.token);

    navigate("/");
  };

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <Card className="w-[350px]">

        <CardContent className="p-6">

          <h2 className="text-xl font-bold mb-4">
            Login
          </h2>

          <form onSubmit={submit} className="space-y-4">

            <Input
              placeholder="Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <Input
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <Button className="w-full">
              Login
            </Button>

          </form>

          <p className="mt-4 text-sm">

            No account?{" "}
            <Link
              className="text-blue-600"
              to="/register"
            >
              Register
            </Link>

          </p>

        </CardContent>

      </Card>

    </div>
  );
}