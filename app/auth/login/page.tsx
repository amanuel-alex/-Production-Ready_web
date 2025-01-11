"use client";
import { useState } from "react";
import Link from "next/link";
import { FaXTwitter, FaGoogle, FaGithub } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function Login() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/login", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 200) {
        throw new Error(response.data.error || "Login failed");
      }

      // Save the token in localStorage or cookies
      localStorage.setItem("token", response.data.token);

      router.push("/main/about"); // Redirect to a protected route
    } catch (error) {
      console.error("Login failed:", error);
      if (error instanceof Error) {
        setServerError(error.message || "Login failed");
      } else {
        setServerError("Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Login
        </h2>
        {serverError && (
          <p className="text-red-500 text-center">{serverError}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
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
              {...register("email")}
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email?.message as string}
              </p>
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
              {...register("password")}
              className="mt-1 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password?.message as string}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
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
        <div className="mt-4 flex justify-center space-x-3  p-4">
          <button
            onClick={() => signIn("google")}
            className="w-min p-4 bg-slate-900 text-white  rounded-md hover:bg-slate-700"
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => signIn("github")}
            className="w-min p-4 bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700"
          >
            <FaGithub />
          </button>
          <button
            onClick={() => signIn("Twitter")}
            className="w-min p-4  bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700"
          >
            <FaXTwitter />
          </button>
        </div>
      </div>
    </div>
  );
}
