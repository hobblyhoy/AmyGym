import { Link } from 'react-router-dom'
import logo from '../assets/cape-coral-gems-logo.png'
import { FACEBOOK_URL, MAPS_URL } from '../constants'

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Cape Coral Gems Athletics"
              className="h-16 w-auto mb-2"
            />
            <p className="text-purple-200 text-sm mt-2">Cape Coral Gems Athletics</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-amber-400 mb-3 text-lg">Contact</h3>
            <a
              href="tel:2393185923"
              className="block text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              (239) 318-5923
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors mt-2 text-sm leading-relaxed block"
            >
              211 Hancock Bridge Pkwy #3<br />
              Cape Coral, FL 33990
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-bold text-amber-400 mb-3 text-lg">Follow Us</h3>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-amber-400 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>

            <div className="mt-4">
              <h3 className="font-bold text-amber-400 mb-3 text-lg">Quick Links</h3>
              <div className="flex flex-col gap-1">
                {[
                  { label: 'Classes', to: '/classes' },
                  { label: 'All Star Cheerleading', to: '/all-star' },
                  { label: 'Private Lessons', to: '/private-lessons' },
                  { label: 'Contact Us', to: '/contact' },
                ].map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          Copyright © 2026 Cape Coral Gems. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
