import React from "react";

const Header = () => {
  var href = window.location.href;
  var hrefAbout = "#about";
  var hrefContact = "#contact";
  return (
    <div className="navbar bg-slate-100">
      <div className="container mx-auto flex flex-wrap px-7 py-6 flex-col md:flex-row items-center">
        <div className="flex-1">
          <a href={href} className="btn btn-ghost normal-case text-xl">
            <img
              src="https://cdn.shopify.com/s/files/1/0156/0327/t/11/assets/logo.png?v=42546271502724357661615235882"
              alt="Workflow"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 text-slate-700">
            <li tabIndex={0}>
              <a href={href}>
                SHOP
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-slate-100 text-slate-700 text-sm rounded shadow-lg z-10">
                <li>
                  <a href={href}>LOREM 1</a>
                </li>
                <li>
                  <a href={href}>LOREM 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href={hrefAbout}>ABOUT</a>
            </li>
            <li>
              <a href={hrefContact}>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
