import { Link } from "react-router-dom";
import logo from "@/assets/logowhite.png";

const Footer = () => {
  return (
    // UPDATED: Increased vertical padding for large screens
    <footer className="bg-footer text-footer-foreground py-5 lg:py-10 2xl:py-14 px-4 lg:px-6 xl:px-10 2xl:px-17">
      
      {/* UPDATED: Increased max-width to 120rem (approx 1920px) */}
      <div className="max-w-[120rem] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 2xl:gap-20 mb-8 lg:mb-16">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-4 lg:mb-6 block">
              {/* UPDATED: Logo scales up on large screens */}
              <img 
                src={logo} 
                alt="Logo" 
                className="h-10 lg:h-12 2xl:h-16 w-auto transition-all duration-300" 
              />
            </Link>
            {/* UPDATED: Text scales up */}
            <p className="text-gray-400 text-sm lg:text-base 2xl:text-lg max-w-sm">
              Professional real estate photo editing services.
            </p>
          </div>

          {/* Contact */}
          <div>
            {/* UPDATED: Headers scale up */}
            <h4 className="text-accent font-semibold mb-3 lg:mb-5 text-base lg:text-lg 2xl:text-xl">
              Contact
            </h4>
            <div className="space-y-2 lg:space-y-3 text-sm lg:text-base 2xl:text-lg text-gray-400">
              <p>Email: support@framestate.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-accent font-semibold mb-3 lg:mb-5 text-base lg:text-lg 2xl:text-xl">
              Follow Us
            </h4>
            <div className="flex flex-col gap-2 lg:gap-3">
              <a
                href="https://www.instagram.com/framestate.co?igsh=bHkwNHN5cXpycXEx"
                target="_blank"
                rel="noopener noreferrer"
                // UPDATED: Links scale up
                className="text-sm lg:text-base 2xl:text-lg text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/framestateofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm lg:text-base 2xl:text-lg text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 pt-6 lg:pt-8 text-center">
          <p className="text-gray-500 text-xs lg:text-sm 2xl:text-base">
            © 2026 FrameState. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;