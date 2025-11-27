'use client';

import Image from "next/image";
import Link from 'next/link';
import styles from "./navbar.module.css";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import React from "react";

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'My Book', href: '/mybook' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' }
]

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);

    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    menuBtn?.classList.toggle(styles.open);
    menu?.classList.toggle("hidden");
  }


  return <div className="container min-w-full ">

    {/* <!-- Flex Container For Nav Items --> */}
    <div className="flex items-center justify-between text-sm pr-6">

      {/* Logo */}
      <div className="z-30 ">
        <Image src="/logo.webp" alt="Sophie" id="logo" height={250} width={350} />
      </div>

      {/* Menu Items */}
      <div
        className="hidden items-center space-x-10 text-black uppercase text-nowrap text-grayishBlue md:flex"
      >

        {links.map((link) => {

          return (
            <Link
              key={link.name}
              href={link.href}
              className={
                clsx(
                  'tracking-widest  hover:text-amber-500',
                  {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                  },
                )}  >
              {/* <LinkIcon className="w-6" /> */}
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}

        {/* <Link href="/" className="tracking-widest  hover:text-amber-500">Home</Link>
        <Link href="/facilities" className="tracking-widest hover:text-amber-500">Facilities</Link>
        <Link href="/openingtimes" className="tracking-widest hover:text-amber-500">Opening Times</Link>
        <Link href="/pricing" className="tracking-widest hover:text-amber-500">Pricing & Membership</Link>
        <Link href="/contact" className="tracking-widest hover:text-amber-500">Contact</Link> */}

      </div>

      {/* <div className="text-2xl md:hidden">My Cool Gym</div> */}
      {/* Hamburger Menu */}
      <button id="menu-btn" onClick={toggleMenu}
        className={`${styles.hamburger} cursor-grab z-30 block md:hidden focus:outline-none`}>
        {/* className={[styles.hamburger, "z-30 block sm:hidden focus:outline-none"].join(" ")}> */}
        <span className={styles.hamburger_top}></span>
        <span className={styles.hamburger_middle}></span>
        <span className={styles.hamburger_bottom}></span>

      </button>

    </div>

    {/* mobile menu */}
    <div
      id="menu"
      className="animate-fade-in fixed hidden inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-slate-600 uppercase divide-y divide-gray-500 opacity-50 bg-stone-300"
    >
      {links.map((link) => {

        return (
            <Link
              onClick={toggleMenu}
              key={link.name}
              href={link.href}
              className="w-full py-3 text-center block hover:text-amber-500">
              {link.name}
            </Link>
          
        );
      })}

    </div>
  </div >
}

function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
