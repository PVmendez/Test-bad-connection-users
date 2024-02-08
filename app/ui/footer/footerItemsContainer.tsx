"use client"

import Item from "./footerItem";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "@/app/lib/menuData";

export default function FooterItemsContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item links={PRODUCTS} title="PRODUCTS" />
      <Item links={RESOURCES} title="RESOURCES" />
      <Item links={COMPANY} title="COMPANY" />
      <Item links={SUPPORT} title="SUPPORT" />
    </div>
  );
};