'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useStore } from './Providers';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const { count, setDrawerOpen, wishlist, user } = useStore();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-indigo/10 bg-white/90 px-4 py-2.5 shadow-soft backdrop-blur sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo to-teal text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="8" cy="9" r="3.2" fill="#fff" />
              <circle cx="16" cy="9" r="3.2" fill="#fff" fillOpacity="0.7" />
              <path d="M3 19c0-3 2.4-5 5-5s5 2 5 5M11 19c0-3 2.4-5 5-5s5 2 5 5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="font-display text-base font-extrabold leading-none tracking-tight text-indigo-deep sm:text-lg">
            HuddleOn<span className="text-teal-deep">CollabAlliance</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 hover:bg-indigo-soft hover:text-indigo">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Link href="/wishlist" className="relative hidden rounded-full p-2.5 hover:bg-indigo-soft sm:block" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0 1 12 6.3 5.4 5.4 0 0 1 21.3 12C19 16.4 12 21 12 21z" /></svg>
            {wishlist.length > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-teal text-[10px] font-bold">{wishlist.length}</span>}
          </Link>
          <button onClick={() => setDrawerOpen(true)} className="relative rounded-full p-2.5 hover:bg-indigo-soft" aria-label="Open cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 7h14l-1.4 11H6.4L5 7zM9 7a3 3 0 0 1 6 0" /></svg>
            {count > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-indigo text-[10px] font-bold text-white">{count}</span>}
          </button>
          <Link href={user ? '/dashboard' : '/login'} className="btn-primary !px-4 !py-2 hidden sm:inline-flex">
            {user ? 'Dashboard' : 'Log in'}
          </Link>
          <button className="rounded-full p-2.5 hover:bg-indigo-soft lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-indigo/10 bg-white p-3 shadow-soft lg:hidden">
          {[...NAV, { href: '/wishlist', label: 'Wishlist' }, { href: user ? '/dashboard' : '/login', label: user ? 'Dashboard' : 'Log in' }, ...(user ? [] : [{ href: '/register', label: 'Create account' }])].map((n) => (
            <Link key={n.href + n.label} href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-semibold hover:bg-indigo-soft">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
