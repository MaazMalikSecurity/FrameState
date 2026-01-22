import { Link } from "react-router-dom";
import logo from "@/assets/logowhite.png"; // import your logo

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-4 block">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm">
              Professional real estate photo editing services.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent font-semibold mb-2">Contact</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <p>Email: support@framestate.com</p>
              <p>Phone: +1 234 567 890</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-accent font-semibold mb-2">Follow Us</h4>
            <div className="flex flex-col gap-1">
              <a
                href="https://www.instagram.com/framestate.co?igsh=bHkwNHN5cXpycXEx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/framestateofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 pt-4 text-center">
          <p className="text-gray-500 text-xs">
            © 2026 FrameState. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
