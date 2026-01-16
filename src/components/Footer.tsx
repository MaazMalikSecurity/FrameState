import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              FrameState
            </Link>
            <p className="text-gray-400 text-sm">
              Professional real estate photo editing services.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-accent font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: support@framestate.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: Your City, Country</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-accent font-semibold mb-4">Follow Us</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/15 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 FrameState. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
