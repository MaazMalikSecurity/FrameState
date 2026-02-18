import { Link } from "react-router-dom";
import logo from "@/assets/logowhite.png";

// Import the icons
import { FaInstagram, FaLinkedin, FaPhone, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    // Increased vertical padding for large screens
    <footer className="bg-footer text-footer-foreground py-5 lg:py-10 2xl:py-14 px-4 lg:px-6 xl:px-10 2xl:px-17">
      
      {/* Increased max-width to 120rem (approx 1920px) */}
      <div className="max-w-[120rem] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 2xl:gap-20 mb-8 lg:mb-16">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-4 lg:mb-6 block">
              {/* Logo scales up on large screens */}
              <img 
                src={logo} 
                alt="Logo" 
                className="h-10 lg:h-12 2xl:h-16 w-auto transition-all duration-300" 
              />
            </Link>
            {/* Text scales up */}
            <p className="text-gray-400 text-sm lg:text-base 2xl:text-lg max-w-sm">
              Professional real estate photo editing services.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-accent font-semibold mb-3 lg:mb-5 text-base lg:text-lg 2xl:text-xl">
              Contact
            </h4>
            <div className="space-y-3 text-sm lg:text-base 2xl:text-lg text-gray-400">
              
              {/* Email Item */}
              <a 
                href="mailto:info@framestate.co" 
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                {/* Email Icon */}
                <FaRegEnvelope className="text-lg lg:text-xl 2xl:text-2xl group-hover:scale-110 transition-transform" />
                <span>info@framestate.co</span>
              </a>

              {/* Phone/WhatsApp Item */}
              <a 
                // "tel:" opens the default phone app on mobile or desktop
                href="tel:+19472224466" 
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                {/* Phone Icon - removed text-green-500 to match the theme, or add a color if you prefer */}
                <FaPhone className="text-lg lg:text-xl 2xl:text-2xl group-hover:scale-110 transition-transform" />
                <span>+1 (947) 222-4466</span>
              </a>

            </div>
          </div>

          {/* Social Links Section */}
          <div>
            <h4 className="text-accent font-semibold mb-3 lg:mb-5 text-base lg:text-lg 2xl:text-xl">
              Follow Us
            </h4>
            
            <div className="flex flex-row gap-4 lg:gap-5">
              <a
                href="https://www.instagram.com/framestate.co?igsh=bHkwNHN5cXpycXEx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors transform hover:-translate-y-1 duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl lg:text-3xl 2xl:text-4xl" />
              </a>

              <a
                href="https://www.linkedin.com/company/framestateofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:-translate-y-1 duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl lg:text-3xl 2xl:text-4xl" />
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