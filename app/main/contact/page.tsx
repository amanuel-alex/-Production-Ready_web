"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        email: z.string().email({ message: "Invalid email address" }),
        username: z
          .string()
          .min(3, { message: "Username must be at least 3 characters" }),
        message: z
          .string()
          .min(10, { message: "Message must be at least 10 characters" }),
      })
    ),
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  interface FormData {
    username: string;
    email: string;
    message: string;
  }

  interface TemplateParams extends Record<string, unknown> {
    from_name: string;
    from_email: string;
    message: string;
  }

  const onSubmit = async (data: FormData) => {
    try {
      const templateParams: TemplateParams = {
        from_name: data.username,
        from_email: data.email,
        message: data.message,
      };

      await emailjs.send(
        "service_n24me0o", // Replace with your service ID
        "template_nqdhd71", // Replace with your template ID
        templateParams,
        "tlcHL57aJAl-kwf3w" // Replace with your user ID
      );

      setSuccessMessage("Message sent successfully!");
      setErrorMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("An error occurred while sending your message.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-8 space-y-6">
        <h2 className="text-4xl font-semibold text-center text-gray-800">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                type="text"
                {...register("username")}
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                placeholder="Your Username"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                placeholder="Your Email"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={4}
                className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                placeholder="Type Your Message here ..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message.message}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-3 px-4 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
            >
              Submit
            </button>
          </div>

          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
