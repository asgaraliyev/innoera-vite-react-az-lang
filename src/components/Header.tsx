import React from 'react';
import { Menu, X, Home, Shield, Users, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SmartSecure</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              ['Ana Səhifə', '/', Home],
              ['Xidmətlər', '#services', Shield],
              ['Haqqımızda', '#about', Users],
              ['Əlaqə', '#contact', Phone],
            ].map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Icon className="h-4 w-4 mr-1" />
                {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[
              ['Ana Səhifə', '/'],
              ['Xidmətlər', '#services'],
              ['Haqqımızda', '#about'],
              ['Əlaqə', '#contact'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Header