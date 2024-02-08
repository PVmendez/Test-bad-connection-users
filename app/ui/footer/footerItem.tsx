"use client"

import { FooterItem } from "@/app/lib/interfaces";
import React from "react";

export default function FooterItem({ links, title }: FooterItem) {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300
          text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};