import React, { useState } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "#lore", text: "Lore/Narrative" },
    { href: "#how-to-buy", text: "How to Buy" },
    { href: "#pfp-generator", text: "PFP Generator" },
    { href: "#memes", text: "Memes" },
  ];

  return (
    <nav className="border-b-2 border-[#2256FF] bg-[#083ADB] fixed w-full z-10 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center md:justify-center">
            <Logo className="w-[80%]" />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-gray-900"
              >
                {item.text}
              </a>
            ))}
            <button className="bg-[#FCC02F] text-white px-4 py-2 rounded-md hover:bg-[#e4b03f]">
              Buy $BUSINESS
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:bg-[#2256FF] block px-3 py-2 rounded-md text-base font-medium"
                  onClick={toggleMenu}
                >
                  {item.text}
                </a>
              ))}
              <button
                className="bg-[#FCC02F] text-white px-4 py-2 rounded-md hover:bg-[#e4b03f] w-full text-left"
                onClick={toggleMenu}
              >
                Buy $BUSINESS
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
