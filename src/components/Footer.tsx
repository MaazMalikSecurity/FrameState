import { Link } from "react-router-dom";
import logo from "@/assets/logowhite.png";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10 lg:py-10 px-4 lg:px-10 transition-colors duration-300">
      <div className="max-w-[100rem] mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12 lg:mb-16">
          
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-6 block">
              {/* YOUR LOGO */}
              <img 
                src={logo} 
                alt="FrameState" 
                className="h-10 lg:h-12 2xl:h-14 w-auto object-contain" 
              />
            </Link>
            {/* YOUR TEXT */}
            <p className="text-muted-foreground text-base md:text-lg max-w-sm leading-relaxed">
              Professional real estate photo editing services.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-primary font-bold mb-6 text-lg md:text-xl">Contact</h4>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground">
              <a 
                href="mailto:info@framestate.co" 
                className="flex items-center gap-3 hover:text-[#f26b2c] transition-colors duration-300"
              >
                <Mail className="w-5 h-5 shrink-0" />
                <span>info@framestate.co</span>
              </a>
              <a 
                href="tel:+19472224466" 
                className="flex items-center gap-3 hover:text-[#f26b2c] transition-colors duration-300"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>+1 (947) 222-4466</span>
              </a>
            </div>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="text-primary font-bold mb-6 text-lg md:text-xl">Follow Us</h4>
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/framestate.co?igsh=bHkwNHN5cXpycXEx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#f26b2c] transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/company/framestateofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#f26b2c] transition-colors duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm md:text-base">
            © 2026 FrameState. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;