"use client";
import { useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaGoogle, FaGithub } from "react-icons/fa6";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors: { email?: string; password?: string } = {};
    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      // Here, you should replace this with actual API logic
      console.log("Logging in with:", { email, password });
      // await loginUser(email, password); // Example function
    } catch (error) {
      setErrors({ email: "Invalid email or password" });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Links */}
        <div className="mt-4 text-center">
          <Link
            href="/auth/signup"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Don't have an account? Sign Up
          </Link>
          <br />
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Forgot Password?
          </Link>
        </div>

        <p className="flex justify-center text-green-600">
          ----- Login with -----
        </p>

        {/* Third-Party Authentication */}
        <div className="mt-4 flex justify-center space-x-3">
          <button
            onClick={() => signIn("google")}
            className="w-min p-8 bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700"
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => signIn("github")}
            className="w-min p-8 bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700"
          >
            <FaGithub />
          </button>
          <button
            onClick={() => signIn("Twitter")}
            className="w-min p-8 bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700"
          >
            <FaXTwitter />
          </button>
        </div>
      </div>
    </div>
  );
}
