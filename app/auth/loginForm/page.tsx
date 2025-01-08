"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors: { email?: string; password?: string } = {};

    // Basic validation
    if (!email) formErrors.email = "Email is required";
    if (!password) formErrors.password = "Password is required";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Here, you can integrate API logic to log the user in
    console.log("Form submitted");
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
          ----- Login with ----
        </p>
        {/* Third-party Authentication Options */}
        <div
          className="mt-4 
         flex justify-center"
        >
          <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 flex items-center justify-center mr-3">
            <span> Google</span>
          </button>
          <button className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500 flex items-center justify-center mr-3">
            <span> Twitter</span>
          </button>
          <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-500 flex items-center justify-center mr-3">
            <span> GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
}
