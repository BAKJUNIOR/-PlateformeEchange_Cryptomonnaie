import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MenuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  return (
      <div
          className={`${
              showMenu ? "left-0" : "-left-[100%]"
          } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
      >
        <div className="card">
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1>Hello User</h1>
              <h1 className="text-sm text-slate-500">Premium user</h1>
            </div>
          </div>
          <nav className="mt-12">
            <ul className="space-y-4 text-xl">
              {MenuLinks.map(({ id, name, link, subMenu }) => (
                  <li key={id}>
                    {subMenu ? (
                        <div className="mb-5">
                          <span className="block mb-2">{name}</span>
                          <ul className="ml-4 space-y-2 text-lg">
                            {subMenu.map(({ id, name, link }) => (
                                <li key={id}>
                                  <Link to={link} className="inline-block">
                                    {name}
                                  </Link>
                                </li>
                            ))}
                          </ul>
                        </div>
                    ) : (
                        <Link to={link} className="mb-5 inline-block">
                          {name}
                        </Link>
                    )}
                  </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer">
          <h1>
            Made with ❤ by <a href="https://dilshad-ahmed.github.io/">Dilshad</a>{" "}
          </h1>
        </div>
      </div>
  );
};

export default ResponsiveMenu;
