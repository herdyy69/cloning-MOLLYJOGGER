import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-row flex-wrap drop-shadow-lg bg-[#fff]">
      <div className="container mx-auto px-7 py-5">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#blank" className="flex items-center py-4 px-2">
                <img src="https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/logo.png?v=42546271502724357661615235882" alt="Workflow" className="h-8 w-auto" />
              </a>
            </div>
          </div>
          <div className="md:flex flex items-center space-x-5">
            <ul className="menu menu-horizontal p-0">
              <li>
                <Link to="/" className="text-gray-900 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <a href="#product" className="text-gray-900 hover:text-gray-900">
                  Product
                </a>
              </li>
              <li tabIndex={0}>
                <a>
                  SHOP
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-[#fff]">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
