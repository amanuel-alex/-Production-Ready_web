"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // State for carousel navigation
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      id: 1,
      title: "Project 1",
      image: "/project1.jpg",
      description: "Custom Home Design",
    },
    {
      id: 2,
      title: "Project 2",
      image: "/project2.jpg",
      description: "Smart Home Integration",
    },
    {
      id: 3,
      title: "Project 3",
      image: "/project3.jpg",
      description: "Home Renovation",
    },
    {
      id: 4,
      title: "Project 4",
      image: "/project4.jpg",
      description: "Modern Kitchen",
    },
    {
      id: 5,
      title: "Project 5",
      image: "/project5.jpg",
      description: "Luxury Bathroom",
    },
    {
      id: 6,
      title: "Project 6",
      image: "/project6.jpg",
      description: "Sustainable Living",
    },
    {
      id: 7,
      title: "Project 7",
      image: "/project7.jpg",
      description: "Minimalist Living Room",
    },
    {
      id: 8,
      title: "Project 8",
      image: "/project8.jpg",
      description: "Outdoor Patio",
    },
  ];

  // Handle previous/next carousel
  const nextCard = () => {
    if (currentIndex + 4 < carouselData.length) {
      setCurrentIndex((prevIndex) => prevIndex + 4);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  const prevCard = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - 4);
    } else {
      setCurrentIndex(carouselData.length - 4); // Loop back to the last set of cards
    }
  };

  return (
    <div className="bg-green-800 text-gray-900">
      {/* First Section - H1 Text, "Explore More" Button, and 100vh Height */}
      <section className="h-screen bg-gray-50 text-center flex flex-col justify-center items-center relative">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Bringing Your Vision to Life
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto">
          We provide modern home designs and renovations tailored to your unique
          taste. Whether it's building from scratch or upgrading an existing
          space, we're here to help!
        </p>
        <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
          Explore More
        </button>
      </section>

      {/* Second Section - Three Cards */}
      <section className="h-screen py-16 bg-white text-center flex flex-col justify-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold">Our Expertise</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-200 p-8 mb-8  rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">Home Design</h3>
              <p className="mt-4 text-gray-600">
                Custom designs tailored to your space.
              </p>
            </div>
            <div className="bg-slate-200 p-8 mb-8  rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">Renovations</h3>
              <p className="mt-4 text-gray-600">
                Transform your existing spaces with expert touch.
              </p>
            </div>
            <div className="bg-slate-200 p-8 mb-8  rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">Smart Home Integration</h3>
              <p className="mt-4 text-gray-600">
                Bring modern technology into your home.
              </p>
            </div>
            <div className="bg-slate-200 p-8 mb-8  rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">Home Design</h3>
              <p className="mt-4 text-gray-600">
                Custom designs tailored to your space.
              </p>
            </div>
            <div className="bg-slate-200 p-8 mb-8  rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">Renovations</h3>
              <p className="mt-4 text-gray-600">
                Transform your existing spaces with expert touch.
              </p>
            </div>
            <div className="bg-slate-200 p-8 mb-8  rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold">Smart Home Integration</h3>
              <p className="mt-4 text-gray-600">
                Bring modern technology into your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Animated Carousel with 4 Cards */}
      <section className="h-screen py-16 bg-gray-50 text-center flex flex-col justify-center">
        <h2 className="text-4xl font-bold">Our Recent Projects</h2>
        <div className="relative mt-8">
          <div className="flex overflow-hidden">
            {carouselData.slice(currentIndex, currentIndex + 4).map((item) => (
              <div key={item.id} className="w-full sm:w-1/4 p-4">
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 flex justify-center items-center bg-black opacity-50 rounded-lg"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <h3 className="text-3xl font-bold">{item.title}</h3>
                    <p className="mt-4 text-xl">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </section>

      {/* Fourth Section - Testimonials with Flexbox in One Row */}
      <section className="h-screen py-16 bg-white text-center flex flex-col justify-center">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold">What Our Clients Say</h2>
          <div className="mt-8 flex justify-center space-x-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-1/4">
              <p className="text-lg italic">
                "HomePro exceeded our expectations! Their design team created
                the perfect space for our family."
              </p>
              <div className="mt-4 text-xl font-semibold">John Doe</div>
              <p className="mt-2 text-gray-600">Homeowner</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-1/4">
              <p className="text-lg italic">
                "We love our new kitchen! The team was professional and helped
                us every step of the way."
              </p>
              <div className="mt-4 text-xl font-semibold">Jane Smith</div>
              <p className="mt-2 text-gray-600">Homeowner</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-1/4">
              <p className="text-lg italic">
                "Fantastic service! They brought our vision to life with the
                perfect mix of functionality and style."
              </p>
              <div className="mt-4 text-xl font-semibold">Samuel Johnson</div>
              <p className="mt-2 text-gray-600">Homeowner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}