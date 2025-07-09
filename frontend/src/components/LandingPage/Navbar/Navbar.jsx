import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#0071dc] w-full flex items-center justify-between px-4 py-2">
      {/* Left section: logo, pickup, search */}
      <div className="flex items-center flex-1 min-w-0">
        {/* Walmart spark icon */}
        <div className="flex items-center mr-4 flex-shrink-0">
          <img
            src="https://brandingstyleguides.com/wp-content/guidelines/2025/01/walmart-web.jpg"
            alt="Walmart Spark"
            className="h-8 w-8"
            style={{ transform: "scale(1.7)", transformOrigin: "center" }}
          />
        </div>
        {/* Pickup or delivery */}
        <button className="flex items-center bg-[#0053E4ff] text-white rounded-full px-4 py-2 mr-4 flex-shrink-0">
          <span className="mr-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Pickup"
              className="h-5 w-5"
            />
          </span>
          Pickup or delivery?
        </button>
        {/* Search bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 flex-1 min-w-0">
          <input
            type="text"
            placeholder="Search everything at Walmart online and in store"
            className="flex-1 outline-none bg-transparent text-black min-w-0"
          />
          <button>
            <svg className="h-5 w-5 text-[#0071dc]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
      {/* Right side links */}
      <div className="flex items-center space-x-6 text-white text-sm font-medium ml-6">
        <div className="flex flex-col items-center cursor-pointer">
          <span>Reorder</span>
          <span className="font-bold">My Items</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <span>Sign In</span>
          <span className="font-bold">Account</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <svg className="h-6 w-6 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span>$0.00</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;