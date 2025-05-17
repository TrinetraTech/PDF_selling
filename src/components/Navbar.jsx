import NavLinks from "./Navlinks";
import SearchBar from "./SearchBar";
import LoginSignup from "./LoginSignup";
import CartIcon from "./CartIcon";
import { useState } from "react";

function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-neutral-900">
              PDF Notes
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </nav>

          {/* Right Side Elements */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <LoginSignup />
            <CartIcon />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <NavLinks />
            </div>

            <div className="mt-4 space-y-3">
              <SearchBar mobile />
              <LoginSignup mobile />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
