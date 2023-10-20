'use client';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { text: 'Dashboard', path: '/' },
  { text: 'Players', path: '/players' },
  { text: 'Matches', path: '/matches' },
  { text: 'Tournaments', path: '/tournaments' },
];


export default function Appbar () {
  const getLinkClasses = (linkPath: string) => {
    const baseLinkClasses = 'flex px-4 py-2 ml-6 border rounded-lg';
    // TODO: fix later
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return linkPath === usePathname() ?
      `${baseLinkClasses} text-white bg-blue-500 hover:bg-blue-600` :
      `${baseLinkClasses} hover:text-white text-gray-500 hover:bg-blue-500`;
  }

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
              <Link href={link.path} key={link.text} className=''>
                <div className={getLinkClasses(link.path)}>
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