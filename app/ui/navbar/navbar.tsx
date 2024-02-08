import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-2 bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-white">POSTS</div>
        <button className="block text-white md:hidden" onClick={toggleNavbar}>
          {isOpen ? (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.293 10l4.147-4.146a1 1 0 10-1.414-1.414L10.586 9 6.439 4.854a1 1 0 10-1.414 1.414L9.172 10l-4.147 4.146a1 1 0 101.414 1.414L10.586 11l4.147 4.146a1 1 0 001.414-1.414L11.293 10z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:items-center`}
        >
          <div className="text-sm md:flex-grow">
            <a
              href="#"
              className="mr-4 mt-4 block text-white md:mt-0 md:inline-block"
            >
              Home
            </a>
            <a
              href="#"
              className="mr-4 mt-4 block text-white md:mt-0 md:inline-block"
            >
              About
            </a>
            <a
              href="#"
              className="mr-4 mt-4 block text-white md:mt-0 md:inline-block"
            >
              Services
            </a>
            <a
              href="#"
              className="mr-4 mt-4 block text-white md:mt-0 md:inline-block"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
