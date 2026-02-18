import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const { darkMode } = useDarkMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.includes("/services");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 transition-all duration-300">
      
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
        
        {/* MAINTAINED: h-16 height */}
        <div className="flex items-center justify-between h-16">
          
          {/* MAINTAINED: Logo sizing */}
          <Link to="/" className="flex items-center flex-shrink-0" onClick={closeMobileMenu}>
            <img
              src={darkMode ? logoWhite : logo}
              alt="FrameState Logo"
              className="h-8 md:h-9 lg:h-10 w-auto transition-all duration-300 hover:opacity-90"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto">
            <li>
              <Link
                to="/"
                // UPDATED: Changed inactive text to 'text-white' for readability
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <Link
                to="/services"
                // UPDATED: Changed inactive text to 'text-white'
                className={`text-base font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  isServicesActive ? "text-primary" : "text-white"
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              <ul className="absolute top-full left-0 mt-2 w-64 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 glass-card shadow-xl border border-white/10 bg-background/95 backdrop-blur-md">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      // UPDATED: Dropdown items text white
                      className="block px-4 py-2.5 text-sm text-white hover:bg-primary/10 hover:text-primary transition-colors"
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
                // UPDATED: Changed inactive text to 'text-white'
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive("/free-trial") ? "text-primary" : "text-white"
                }`}
              >
                Free Trial
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                // UPDATED: Changed inactive text to 'text-white'
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive("/about") ? "text-primary" : "text-white"
                }`}
              >
                About Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10 text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <ul className="px-6 py-6 space-y-2">
            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                // UPDATED: Mobile text to white
                className={`block py-3 text-base font-medium border-b border-border/50 ${
                  isActive("/") ? "text-primary" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>

            {/* Mobile Services Section */}
            <li>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                // UPDATED: Mobile text to white
                className={`w-full flex items-center justify-between py-3 text-base font-medium border-b border-border/50 ${
                  isServicesActive ? "text-primary" : "text-white"
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
                <ul className="mt-2 ml-4 space-y-1">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        to={service.href}
                        onClick={closeMobileMenu}
                        // UPDATED: Sub-menu items white
                        className="block py-2.5 text-sm text-white/80 hover:text-primary transition-colors"
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
                // UPDATED: Mobile text to white
                className={`block py-3 text-base font-medium border-b border-border/50 ${
                  isActive("/free-trial") ? "text-primary" : "text-white"
                }`}
              >
                Free Trial
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                // UPDATED: Mobile text to white
                className={`block py-3 text-base font-medium ${
                  isActive("/about") ? "text-primary" : "text-white"
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