import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="text-white">
      <header className="absolute top-0 w-full flex justify-between items-center px-6 py-4 z-10">
        <div className="text-lg font-bold tracking-widest">TaskHive</div>
        <nav className="flex space-x-3">
            <Link to="/signin"><button className="text-sm px-5 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600 transition-all">
            Sign In
          </button></Link>
          
        </nav>
      </header>
    </div>
  );
}

export default Header;
