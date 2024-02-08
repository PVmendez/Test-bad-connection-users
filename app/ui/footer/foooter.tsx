'use client';

import React from 'react';
import ItemsContainer from './footerItemsContainer';
import { Icons } from '@/app/lib/menuData';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-[#ffffff19] px-4 py-7 sm:px-12 md:flex md:items-center md:justify-between">
        <h1
          className="mb-6 text-3xl font-semibold md:mb-0 md:w-2/5 lg:text-4xl
         lg:leading-normal"
        >
          Apply totally <span className="text-teal-400">Free</span> if you want
          to be a user
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter your mail"
            className="mb-4
           mr-1 w-full rounded px-2 py-2.5 text-gray-800 focus:outline-none sm:mr-5 sm:w-72 lg:mb-0"
          />
          <button
            className="w-full rounded-md bg-teal-400 px-5 py-2.5 font-[Poppins]
           text-white duration-300 hover:bg-teal-500 md:w-auto"
          >
            Request
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 gap-10 pb-8 pt-2
      text-center text-sm text-gray-400 sm:grid-cols-2 lg:grid-cols-3"
      >
        <span>© 2024 Valentino Méndez. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
}
