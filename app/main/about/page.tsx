// pages/about.tsx

import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900">About Me</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate Software Engineer with a focus on building robust,
            scalable applications. I thrive in fast-paced environments and enjoy
            solving complex problems with creative solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Who Am I?</h2>
            <p className="text-lg text-gray-700">
              I am a full-stack developer,mobile app developer ,graphics
              designer,video editor software engineer with experience in
              designing and developing web applications ,mobile applications,
              graphics and many more. I specialize in front-end frameworks like
              React, Next.js,Laravel,Angular and many frontend framework and
              backend technologies like Djanjo,php,Node.js. I am passionate
              about creating user-friendly interfaces and efficient, scalable
              server-side applications.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, I enjoy contributing to open-source projects,
              exploring new tech trends, and participating in hackathons.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Skills & Technologies
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center text-lg text-gray-700">
                <span className="w-6 h-6 mr-2 bg-blue-500 rounded-full text-white text-center">
                  🛠
                </span>{" "}
                JavaScript, TypeScript
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <span className="w-6 h-6 mr-2 bg-blue-500 rounded-full text-white text-center">
                  🛠
                </span>{" "}
                php, Laravel
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <span className="w-6 h-6 mr-2 bg-green-500 rounded-full text-white text-center">
                  🛠
                </span>{" "}
                ReactNative, Flutter, Swift
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <span className="w-6 h-6 mr-2 bg-green-500 rounded-full text-white text-center">
                  🛠
                </span>{" "}
                React, Next.js
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <span className="w-6 h-6 mr-2 bg-yellow-500 rounded-full text-white text-center">
                  🛠
                </span>{" "}
                Node.js, Express.js, Django, Flask
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <span className="w-6 h-6 mr-2 bg-red-500 rounded-full text-white text-center">
                  🛠
                </span>{" "}
                MongoDB, PostgreSQL, MySQL, Firebase
              </li>
              <li className="flex items-center text-lg text-gray-700">
                <span className="w-6 h-6 mr-2 bg-purple-500 rounded-full text-white text-center">
                  🛠
                </span>{" "}
                Git, Docker
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I’ve worked on. I enjoy building
            things that solve real-world problems.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Project One
              </h3>
              <p className="text-gray-600">
                A web application built with React, Node.js, and MongoDB.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Project One
              </h3>
              <p className="text-gray-600">
                A web application built with React, Node.js, and MongoDB.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Project One
              </h3>
              <p className="text-gray-600">
                A web application built with React, Node.js, and MongoDB.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Project One
              </h3>
              <p className="text-gray-600">
                A web application built with React, Node.js, and MongoDB.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Project Two
              </h3>
              <p className="text-gray-600">
                A mobile app using React Native and Firebase.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                View Project
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Project Three
              </h3>
              <p className="text-gray-600">
                A real-time chat application built with WebSocket and Node.js.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
