import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      toast.success("Login Successful!");
      onClose();
    } catch (error) {
      toast.error(error.response?.data?.msg || "Login Failed");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 w-full mb-3" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-3" onChange={e => setPassword(e.target.value)} />
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-red-500 text-white rounded mr-2" onClick={onClose}>Close</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
