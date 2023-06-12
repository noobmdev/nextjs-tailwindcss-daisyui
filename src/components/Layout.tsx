import React, { ReactNode } from 'react';

import Link from 'next/link';

import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="navbar flex justify-between bg-base-100  z-10 shadow-md ">
        <div className="">
          <Link href="/">
            <h1 className="text-2xl font-semibold">HOME</h1>
          </Link>
        </div>

        <div className="order-last">
          <ThemeToggle />

          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/about">
                  <h3 className="text-lg font-semibold">About</h3>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer>Footer</footer>
    </>
  );
};

export default Layout;
