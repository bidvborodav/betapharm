"use client"

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import AppleSearch from "@/components/ui/search";
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  items: NavItem[];
}

interface NavStructure {
  [key: string]: NavSection;
}

interface DropdownMenuProps {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  label: string;
  items: NavItem[];
}

const navStructure: NavStructure = {
  "Über uns": {
    items: [
      { label: "Geschichte", href: "/uber-uns/geschichte" },
      { label: "Vision & Mission", href: "/uber-uns/vision" },
      { label: "Team", href: "/uber-uns/team" },
      { label: "Standorte", href: "/uber-uns/standorte" },
    ]
  },
  "Karriere": {
    items: [
      { label: "Offene Stellen", href: "/karriere/stellen" },
      { label: "Benefits", href: "/karriere/benefits" },
      { label: "Entwicklung", href: "/karriere/entwicklung" },
    ]
  },
  "Produkte": {
    items: [
      { label: "Medikamente", href: "/produkte/medikamente" },
      { label: "Generika", href: "/produkte/generika" },
      { label: "Forschung", href: "/produkte/forschung" },
    ]
  },
  "Service": {
    items: [
      { label: "Support", href: "/service/support" },
      { label: "FAQ", href: "/service/faq" },
      { label: "Kontakt", href: "/service/kontakt" },
    ]
  }
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="absolute top-full left-0 mt-2 py-2 bg-white rounded-lg shadow-lg"
      onMouseLeave={onClose}
    >
      <div className="min-w-48">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const NavItem: React.FC<NavItemProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-1 text-sm uppercase tracking-wide hover:text-indigo-500 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{label}</span>
        <ChevronDown 
          size={16}
          className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <DropdownMenu 
        items={items}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

const AdaptiveHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-11/12 bg-white/10 backdrop-blur-sm shadow-md rounded-full">
      <div className="m-4 h-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center p-2">
          <Link href="/" className="flex items-center">
            <Image
              src="https://betapharm.de/typo3conf/ext/twtdh_layoutpackage/Resources/Public/Images/Layout/betapharm-logo.png"
              alt="betapharm Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-end space-x-8">
          {Object.entries(navStructure).map(([label, { items }]) => (
            <NavItem key={label} label={label} items={items} />
          ))}
          <div className="ml-4 p-2">
            <AppleSearch />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col p-4">
            {Object.entries(navStructure).map(([label, { items }]) => (
              <div key={label} className="py-2">
                <button
                  className="flex items-center justify-between w-full text-sm uppercase tracking-wide text-gray-700"
                  onClick={() => setMobileExpandedItem(mobileExpandedItem === label ? null : label)}
                >
                  <span>{label}</span>
                  <ChevronDown 
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      mobileExpandedItem === label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {mobileExpandedItem === label && (
                  <div className="mt-2 ml-4 space-y-2">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-indigo-500 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileExpandedItem(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <AppleSearch />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default AdaptiveHeader;