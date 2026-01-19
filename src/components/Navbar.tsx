import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logowhite.png";
import { useDarkMode } from "@/context/DarkModeContext";

const services = [
  { name: "Photo Retouching / Enhancement", href: "/services/photo-retouching" },
  { name: "HDR Photo Blending", href: "/services/hdr-blending" },
  { name: "Virtual Staging", href: "/services/virtual-staging" },
  { name: "Decluttering / Object Removal", href: "/services/decluttering" },
  { name: "Twilight", href: "/services/twilight" },
];

const Navbar = () => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const linkBase =
    "text-sm font-medium transition-colors hover:text-[#f26b2c]";
  const active = darkMode ? "text-white" : "text-[#f26b2c]";
  const inactive = darkMode ? "text-white/90" : "text-foreground";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
        darkMode ? "bg-footer border-none" : "bg-white/95 border-b border-border"
      }`}
    >
      {/* UPDATED: Removed max-w-[90rem] and mx-auto. 
         Added w-full. 
         Increased desktop padding (lg:px-8 xl:px-12) for better spacing on wide screens.
      */}
      <div className="w-full px-3 sm:px-4 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-12 lg:h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMobileMenu}>
            <img
              src={darkMode ? logoWhite : logo}
              alt="FrameState Logo"
              className="h-7 md:h-8 lg:h-9 w-auto transition-all duration-300 hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 ml-auto">
            <li>
              <Link
                to="/"
                className={`${linkBase} ${
                  location.pathname === "/" ? active : inactive
                }`}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <Link
                to="/services"
                className={`${linkBase} flex items-center gap-1 ${
                  location.pathname.includes("/services")
                    ? active
                    : inactive
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>

              <ul
                className={`absolute top-full left-0 mt-2 w-64 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${
                  darkMode ? "bg-[#22265c] border-white/20" : "bg-white border-border"
                }`}
              >
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-[#f26b2c] hover:text-white ${
                        darkMode ? "text-white/90" : "text-foreground"
                      }`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                to="/free-trial"
                className={`${linkBase} ${
                  location.pathname === "/free-trial" ? active : inactive
                }`}
              >
                Free Trial
              </Link>
            </li>

            <li>
              <Link
                to="/aboutus"
                className={`${linkBase} ${
                  location.pathname === "/aboutus" ? active : inactive
                }`}
              >
                About Us
              </Link>
            </li>

            {/* Dark Mode Toggle */}
            <li>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button & Dark Mode Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${darkMode ? "text-white" : "text-gray-700"}`} />
              ) : (
                <Menu className={`w-6 h-6 ${darkMode ? "text-white" : "text-gray-700"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t ${
            darkMode ? "border-white/20 bg-footer" : "border-border bg-white"
          }`}
        >
          <ul className="px-4 py-4 space-y-3">
            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block py-2 text-base font-medium ${
                  location.pathname === "/" ? active : inactive
                }`}
              >
                Home
              </Link>
            </li>

            {/* Mobile Services Section */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full flex items-center justify-between py-2 text-base font-medium ${
                  location.pathname.includes("/services") ? active : inactive
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        to={service.href}
                        onClick={closeMobileMenu}
                        className={`block py-2 text-sm ${
                          darkMode ? "text-white/80 hover:text-[#f26b2c]" : "text-foreground/80 hover:text-[#f26b2c]"
                        }`}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/free-trial"
                onClick={closeMobileMenu}
                className={`block py-2 text-base font-medium ${
                  location.pathname === "/free-trial" ? active : inactive
                }`}
              >
                Free Trial
              </Link>
            </li>

            <li>
              <Link
                to="/aboutus"
                onClick={closeMobileMenu}
                className={`block py-2 text-base font-medium ${
                  location.pathname === "/aboutus" ? active : inactive
                }`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;