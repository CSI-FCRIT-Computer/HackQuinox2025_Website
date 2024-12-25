import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black text-white flex justify-end space-x-4 p-4">
      <Link href="/" className="hover:text-blue-500 transition duration-300">
        Home
      </Link>
      <Link href="/" className="hover:text-blue-500 transition duration-300">
        Timeline
      </Link>
      <Link href="/" className="hover:text-blue-500 transition duration-300">
        Prize Pool
      </Link>
      <Link href="/problem-statements" className="hover:text-blue-500 transition duration-300">
        Problem Statements
      </Link>
      <Link href="/" className="hover:text-blue-500 transition duration-300">
        FAQ
      </Link>
      <Link href="/sponsors" className="hover:text-blue-500 transition duration-300">
        Sponsors
      </Link>
    </nav>
  );
}
