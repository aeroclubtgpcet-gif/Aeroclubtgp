import { Link } from 'react-router';
import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-blue-500/20 bg-gradient-to-b from-[#0a0e1a] to-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <Plane className="h-8 w-8 text-blue-400 transform rotate-45 group-hover:text-cyan-400 transition-colors duration-300" />
                <div className="absolute inset-0 blur-xl bg-blue-400/20 group-hover:bg-cyan-400/30 transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Aero Club
                </span>
                <span className="text-xs text-cyan-400/80 tracking-wider">TGP</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Where Innovation Takes Flight. Join us in pushing the boundaries of aerospace engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/members" label="Members" />
              <FooterLink to="/projects" label="Projects" />
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink to="/events" label="Events" />
              <FooterLink to="/contact" label="Contact" />
              <FooterLink to="/login" label="Member Login" />
              <FooterLink to="/admin" label="Admin Portal" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>contact@aeroclubtgp.com</span>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
                <span>TGP Campus, Innovation District</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-blue-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Aero Club TGP. All rights reserved.
            </p>

            <div className="flex gap-4">
              <SocialButton icon={Facebook} label="Facebook" />
              <SocialButton icon={Twitter} label="Twitter" />
              <SocialButton icon={Instagram} label="Instagram" />
              <SocialButton icon={Linkedin} label="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link
      to={to}
      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm inline-block"
    >
      {label}
    </Link>
  </li>
);

const SocialButton = ({ icon: Icon, label }: any) => (
  <button className="p-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 hover:border-cyan-400/50 rounded-lg transition-all duration-300 group">
    <Icon className="h-4 w-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
    <span className="sr-only">{label}</span>
  </button>
);
