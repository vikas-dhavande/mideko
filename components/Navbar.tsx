import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ShoppingCart, Search, Stethoscope } from 'lucide-react';
import { User as UserType } from '../types';

interface NavbarProps {
  user: UserType | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Find Doctors', path: '/doctors' },
    { name: 'Hospitals', path: '/hospitals' },
    { name: 'Shop', path: '/shop' },
    { name: 'Community', path: '/community' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Stethoscope className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-slate-900">MediConnect</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive(link.path)
                      ? 'border-primary-500 text-slate-900'
                      : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/shop" className="p-2 text-slate-400 hover:text-slate-500 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-1 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                2
              </span>
            </Link>
            
            {user ? (
              <Link to="/dashboard" className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-primary-600">
                 <img src={user.avatarUrl} alt="" className="h-8 w-8 rounded-full bg-slate-300" />
                 <span>{user.name}</span>
              </Link>
            ) : (
              <div className="flex items-center space-x-2">
                 <Link to="/login" className="text-slate-500 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                 <Link to="/register" className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-md text-sm font-medium">Sign Up</Link>
              </div>
            )}
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                   isActive(link.path)
                    ? 'bg-primary-50 border-primary-500 text-primary-700'
                    : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-slate-200">
             {user ? (
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.avatarUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-slate-800">{user.name}</div>
                    <div className="text-sm font-medium text-slate-500">{user.email}</div>
                    <Link to="/dashboard" className="mt-2 block text-primary-600 text-sm">Go to Dashboard</Link>
                  </div>
                </div>
             ) : (
                <div className="px-4 flex flex-col space-y-2">
                  <Link to="/login" className="block text-center w-full border border-slate-300 px-4 py-2 rounded-md text-slate-700 font-medium">Login</Link>
                  <Link to="/register" className="block text-center w-full bg-primary-600 px-4 py-2 rounded-md text-white font-medium">Sign Up</Link>
                </div>
             )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
