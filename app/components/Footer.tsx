import React from "react";

const FooterPage = () => {
  return (
    <div>
      <footer className="bg-slate-100 text-slate-900 p-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <ul className="flex space-x-5">
            <li>
              <a href="/" className="text-lg font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-lg font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-lg font-semibold">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
