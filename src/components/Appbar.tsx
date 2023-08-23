import Link from 'next/link';
import type { ReactNode } from 'react';

const links = [
  { text: 'Players', path: '/' },
  { text: 'Matches', path: '/matches' },
  { text: 'Tournaments', path: '/tournaments' },
];

export default function Appbar () {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Bracketier</span>
        </a>
        <nav className="flex flex-wrap text-base justify-items-end">
          {links && links.map<ReactNode>((link) => {
            return (
              <Link href={link.path} key={link.text} className='hover:text-blue-400'>
                <div className='flex px-4 py-2 ml-6 border border-sky-500 hover:text-white text-gray-500 hover:bg-blue-500 rounded-lg'>
                  { link.text }
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};