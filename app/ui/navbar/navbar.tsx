import { NavbarMenu } from '@/app/lib/menuData';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 px-2 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="cursor-pointer font-bold text-white hover:text-teal-400">
          POSTS
        </div>
        <div className="md:flex md:w-auto md:items-center">
          <div
            className={`text-sm md:flex-grow ${isOpen ? 'block' : 'hidden'}`}
          >
            {NavbarMenu.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="mr-4 mt-4 block cursor-pointer text-white hover:text-teal-400 md:mt-0 md:inline-block"
              >
                {item.name}
              </a>
            ))}
            {isOpen && (
              <button
                className="mt-4 block text-white hover:text-teal-400 md:hidden"
                onClick={toggleNavbar}
              >
                Close Nav
              </button>
            )}
          </div>
          <button
            className="block text-white md:hidden "
            onClick={toggleNavbar}
          >
            {!isOpen && (
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
        </div>
      </div>
    </nav>
  );
}
