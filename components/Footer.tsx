import Link from 'next/link';
import { SITE } from '@/lib/site';
import { CATEGORIES } from '@/lib/products';
import PayLogos from './PayLogos';

export default function Footer() {
  return (
    <footer className="mt-10 rounded-t-[40px] bg-gradient-to-b from-indigo-deep to-ink text-white">
      <div className="wrap grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-extrabold">{SITE.domain}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
            Downloadable templates, toolkits and playbooks that help teams meet, plan and work together.
          </p>
          <address className="mt-5 text-sm not-italic leading-7 text-white/85">
            <strong>{SITE.corp}</strong> (DBA {SITE.dba})
            <br />
            {SITE.address}
            <br />
            Phone: <a className="underline" href={SITE.phoneHref}>{SITE.phone}</a>
            <br />
            Email: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </address>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-teal">Shop</p>
          <ul className="space-y-2 text-sm text-white/80">
            {CATEGORIES.map((c) => (
              <li key={c.slug}><Link className="hover:text-teal" href={`/shop?category=${c.slug}`}>{c.name}</Link></li>
            ))}
            <li><Link className="hover:text-teal" href="/dashboard">My account</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-teal">Company and policies</p>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link className="hover:text-teal" href="/about">About</Link></li>
            <li><Link className="hover:text-teal" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-teal" href="/terms">Terms &amp; Conditions</Link></li>
            <li><Link className="hover:text-teal" href="/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:text-teal" href="/refund">Refund Policy</Link></li>
            <li><Link className="hover:text-teal" href="/digital-delivery">Digital Delivery</Link></li>
            <li><Link className="hover:text-teal" href="/fulfillment-address">Fulfillment Address</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-start justify-between gap-4 py-6 text-xs text-white/70 md:flex-row md:items-center">
          <div className="space-y-1">
            <p>Personal information will not be shared with Third Parties.</p>
            <p>&copy; 2026 {SITE.corp}. All rights reserved. Operating as {SITE.dba}. You must be 18 or older to purchase.</p>
          </div>
          <PayLogos light />
        </div>
      </div>
    </footer>
  );
}
