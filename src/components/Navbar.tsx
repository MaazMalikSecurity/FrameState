import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Photo Retouching / Enhancement", href: "/services/photo-retouching" },
  { name: "HDR Photo Blending", href: "/services/hdr-blending" },
  { name: "Virtual Staging", href: "/services/virtual-staging" },
  { name: "Decluttering / Object Removal", href: "/services/decluttering" },
  { name: "Twilight", href: "/services/twilight" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="FrameState Logo"
              className="h-8 md:h-10 w-auto transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <Link
                to="/services"
                className={`font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                  location.pathname.includes("/services")
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </Link>

              <ul className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
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
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === "/free-trial"
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                Free Trial
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === "/contact"
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
