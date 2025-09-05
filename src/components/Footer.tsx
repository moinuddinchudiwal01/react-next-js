import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 py-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Logo & About */}
          <div>
            <h2 className='text-2xl font-bold text-white'>MyLogo</h2>
            <p className='mt-3 text-gray-400'>
              Building modern web experiences with Next.js & TailwindCSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-3'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='hover:text-blue-500'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-blue-500'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:text-blue-500'>
                  Services
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-blue-500'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-3'>Follow Us</h3>
            <div className='flex space-x-4'>
              <Link
                href='https://facebook.com'
                target='_blank'
                className='hover:text-blue-500'
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href='https://twitter.com'
                target='_blank'
                className='hover:text-blue-400'
              >
                <FaTwitter size={24} />
              </Link>
              <Link
                href='https://instagram.com'
                target='_blank'
                className='hover:text-pink-500'
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                href='https://linkedin.com'
                target='_blank'
                className='hover:text-blue-600'
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm'>
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
