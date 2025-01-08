import React from "react";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="bg-[#123456] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Links */}
          <div className="space-y-6">
            <div className="text-3xl font-extrabold text-white">
              {" "}
              <Image
                src="/amazing-logoo.png"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/main/about"
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/main/contact"
                  className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300">
              Stay updated with the latest news and updates.
            </p>
            <form className="flex items-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-lg border border-gray-300 text-black"
              />
              <button
                type="submit"
                className="px-6 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-green-400 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-green-400  transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-300 hover:text-green-400  transition-colors duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} amazing company. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
