"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-white shadow-md fixed w-full z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16 items-center'>
          {/* Logo */}
          <div className='text-2xl font-bold text-blue-600'>
            <Link href='/'>MyLogo</Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8'>
            <Link href='/' className='hover:text-blue-600'>
              Home
            </Link>
            <Link href='/about' className='hover:text-blue-600'>
              About
            </Link>
            <Link href='/services' className='hover:text-blue-600'>
              Services
            </Link>
            <Link href='/contact' className='hover:text-blue-600'>
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-800 focus:outline-none'
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white shadow-lg'>
          <div className='flex flex-col px-4 pt-2 pb-4 space-y-2'>
            <Link href='/' className='hover:text-blue-600'>
              Home
            </Link>
            <Link href='/about' className='hover:text-blue-600'>
              About
            </Link>
            <Link href='/services' className='hover:text-blue-600'>
              Services
            </Link>
            <Link href='/contact' className='hover:text-blue-600'>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
