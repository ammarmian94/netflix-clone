import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, LogOut, Menu } from "lucide-react";

import { useAuthStore } from "../store/authUser";
import { useContentStore } from "../store/content";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { user, logout } = useAuthStore();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const { setContentType } = useContentStore();

  return (
    <>
      <header className="max-w-6xl mx-auto flex flex-wrap items-cener justify-between p-4 h-20">
        <div className="flex items-center gap-10 z-50">
          <Link to={"/"}>
            <img
              src="/netflix-logo.png"
              alt="Netflix Logo"
              className="w-32 sm:w-40"
            />
          </Link>
          {/* Desktop Navbar items */}
          <div className="hidden sm:flex items-center gap-2">
            <Link
              to={"/"}
              className="hover:underline"
              onClick={() => setContentType("movies")}
            >
              Movies
            </Link>
            <Link
              to={"/"}
              className="hover:underline"
              onClick={() => setContentType("tv")}
            >
              TV Shows
            </Link>
            <Link to={"/history"} className="hover:underline">
              History
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 z-50">
          <Link to={"/search"}>
            <Search className="size-6 cursor-pointer" />
          </Link>
          <img
            src={user.image}
            alt="Avatar"
            className="h-8 rounded cursor-pointer"
          />
          <LogOut className="h-6 cursor-pointer" onClick={logout} />
          <div className="sm:hidden">
            <Menu
              className="size-6 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>

        {/* Mobile Navbar Items */}
        {isMobileMenuOpen && (
          <div className="w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-600">
            <Link
              to={"/"}
              className="block hover:underline p-2"
              onClick={toggleMobileMenu}
            >
              Movies
            </Link>
            <Link
              to={"/"}
              className="block hover:underline p-2"
              onClick={toggleMobileMenu}
            >
              TV Shows
            </Link>
            <Link
              to={"/search"}
              className="block hover:underline p-2"
              onClick={toggleMobileMenu}
            >
              History
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
