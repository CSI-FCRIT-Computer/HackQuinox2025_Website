import Link from 'next/link';
import React from 'react';
//hello
export default function Nav() {
  return (
    <nav className="flex space-x-4">
      <Link href="/" className="hover:text-blue-500 transition duration-300">
        Home
      </Link>
      <Link href="/problem-statements" className="hover:text-blue-500 transition duration-300">
        Problem Statements
      </Link>
      <Link href="/sponsors" className="hover:text-blue-500 transition duration-300">
        Sponsors
      </Link>
    </nav>
  );
}
