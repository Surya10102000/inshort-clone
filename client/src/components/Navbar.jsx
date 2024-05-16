import React from "react";

const hamburger = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const cross = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const Navbar = ({ categories, setNewsCategory }) => {

  return (
    <div className="navbar bg-base-100 drop-shadow-sm shadow-black sticky top-0 z-10">
      {/* drawer */}
      <div className="drawer z-10 max-w-16">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn drawer-button">
            {hamburger}
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <button className="btn btn-square ml-60">
              <label htmlFor="my-drawer" className="drawer-button  ">
                {cross}
              </label>
            </button>
            {/* Side bar Option */}
            <div className="text-base font-semibold text-center">
              Categories
            </div>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryChange(category.name)}
              >
                <label
                  htmlFor="my-drawer"
                  className="drawer-button"
                  onClick={() => {
                    console.log(category.name);
                  }}
                >
                  {category.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a className="font-bold ml-2 text-xl text-left ">
        sum <span className="text-red-600">News</span>
      </a>
    </div>
  );
};

export default Navbar;
