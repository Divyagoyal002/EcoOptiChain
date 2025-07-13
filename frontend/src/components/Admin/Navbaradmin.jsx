import React from "react";
import {
  Bell,
  Settings,
  User,
  Search,
  Filter,
} from "lucide-react";

const NavbarAdmin = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-50 via-green-100 to-green-200 border-b shadow-lg">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-xl shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-2xl font-extrabold text-green-700 tracking-tight drop-shadow">
            Admin Panel
          </span>
        </div>

        {/* Middle: Search Bar */}
        <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow-md max-w-lg w-full mx-8">
          <Search className="w-5 h-5 text-green-400" />
          <input
            type="text"
            placeholder="Search routes, orders..."
            className="bg-transparent px-3 py-1 w-full text-base focus:outline-none text-green-700"
          />
          <button className="ml-2 hover:bg-green-100 p-2 rounded-lg transition">
            <Filter className="w-5 h-5 text-green-500" />
          </button>
        </div>

        {/* Right: Notification, Settings, Profile */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <Bell className="w-6 h-6 text-green-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <Settings className="w-6 h-6 text-green-600 hover:text-green-800 transition" />
          <div className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-full shadow-lg">
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;