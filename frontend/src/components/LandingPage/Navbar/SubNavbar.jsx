import React from 'react';

const SubNavbar = () => {
  return (
    <nav className="bg-[#f5f8fc] w-full px-8 py-2 flex items-center text-[#002d58] text-sm font-medium">
      {/* Departments */}
      <button className="flex items-center mr-6 font-bold">
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
          <rect x="2" y="2" width="4" height="4" />
          <rect x="8" y="2" width="4" height="4" />
          <rect x="14" y="2" width="4" height="4" />
          <rect x="2" y="8" width="4" height="4" />
          <rect x="8" y="8" width="4" height="4" />
          <rect x="14" y="8" width="4" height="4" />
        </svg>
        Departments
        <svg className="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 8l4.5 4 4.5-4" />
        </svg>
      </button>
      {/* Services */}
      <button className="flex items-center mr-6 font-bold">
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20">
          <circle cx="5" cy="5" r="2" />
          <circle cx="15" cy="5" r="2" />
          <circle cx="5" cy="15" r="2" />
          <circle cx="15" cy="15" r="2" />
        </svg>
        Services
        <svg className="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 8l4.5 4 4.5-4" />
        </svg>
      </button>
      {/* Divider */}
      <span className="mx-3 text-[#b3c1d1]">|</span>
      {/* Menu Items */}
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:underline">Get it Fast</a>
        <a href="#" className="hover:underline">New Arrivals</a>
        <a href="#" className="hover:underline">Deals</a>
        <a href="#" className="hover:underline">Dinner Made Easy</a>
        <a href="#" className="hover:underline">Pharmacy Delivery</a>
        <a href="#" className="hover:underline">Trending</a>
        <a href="#" className="hover:underline">Back to School</a>
        <a href="#" className="hover:underline">My Items</a>
        <a href="#" className="hover:underline">Greenmart+</a>
      </div>
      {/* Spacer */}
      <div className="flex-1" />
      {/* More */}
      <button className="flex items-center font-bold ml-6">
        More
        <svg className="h-3 w-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 8l4.5 4 4.5-4" />
        </svg>
      </button>
    </nav>
  );
};

export default SubNavbar;