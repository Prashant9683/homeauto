"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl z-40">
        <nav className="bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl md:text-xl font-bold text-[#4169E1]">
                HOME AUTOMATION
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/wireless"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#4169E1] transition-colors"
              >
                Wireless Home Automation
              </Link>
              <Link
                href="/wired"
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#4169E1] transition-colors"
              >
                Wired Home Automation
              </Link>
              <Link href="/contact">
                <button className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors ml-4 shadow-[0_0_10px_rgba(65,105,225,0.3)]">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#4169E1] hover:text-[#4169E1]/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#1E1E1E] z-30">
          <div className="flex flex-col h-full px-6 py-24">
            <div className="flex flex-col space-y-6">
              <Link
                href="/wireless"
                className="text-white hover:text-[#4169E1] transition-colors py-2 text-lg font-medium"
              >
                Wireless Home Automation
              </Link>
              <Link
                href="/wired"
                className="text-white hover:text-[#4169E1] transition-colors py-2 text-lg font-medium"
              >
                Wired Home Automation
              </Link>
              <Link href="/contact">
                <button className="bg-[#4169E1] hover:bg-[#4169E1]/90 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors w-full shadow-[0_0_10px_rgba(65,105,225,0.3)]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
