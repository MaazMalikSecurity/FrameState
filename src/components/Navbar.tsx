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

  const linkBase =
    "text-sm font-medium transition-colors hover:text-[#f26b2c]";
  const active = "text-[#f26b2c]";
  const inactive = "text-foreground";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Slightly reduced left padding */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center h-14">
          
          {/* Logo — nudged left */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="FrameState Logo"
              className="h-7 md:h-8 w-auto transition-opacity hover:opacity-80"
            />
          </Link>

          {/* Navigation Links — nudged right */}
          <ul className="hidden md:flex items-center gap-8 ml-auto pl-16">
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

              <ul className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="block px-4 py-2 text-sm transition-colors text-foreground hover:bg-[#f26b2c] hover:text-white"
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
                  location.pathname === "/free-trial"
                    ? active
                    : inactive
                }`}
              >
                Free Trial
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`${linkBase} ${
                  location.pathname === "/contact"
                    ? active
                    : inactive
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
