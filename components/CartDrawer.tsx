'use client';

import Link from 'next/link';
import { useStore } from './Providers';
import { money } from '@/lib/products';

export default function CartDrawer() {
  const { drawerOpen, setDrawerOpen, lines, total, setQty, remove } = useStore();
  if (!drawerOpen) return null;
  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Cart">
      <button className="absolute inset-0 bg-ink/50" onClick={() => setDrawerOpen(false)} aria-label="Close cart" />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-indigo/10 p-5">
          <h2 className="h3">Your cart</h2>
          <button onClick={() => setDrawerOpen(false)} className="rounded-full p-2 hover:bg-indigo-soft" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {lines.length === 0 && <p className="text-sm text-ink/70">Your cart is empty. Browse the shop to find templates for your team.</p>}
          {lines.map(({ product, qty }) => (
            <div key={product.slug} className="flex gap-3">
              <div className="imgbox h-20 w-20 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold leading-5">{product.name}</p>
                <p className="text-sm text-indigo">{money(product.price)}</p>
                <div className="mt-1 flex items-center gap-2 text-sm">
                  <button className="h-7 w-7 rounded-full bg-indigo-soft font-bold" onClick={() => setQty(product.slug, qty - 1)} aria-label="Decrease">-</button>
                  <span className="w-5 text-center">{qty}</span>
                  <button className="h-7 w-7 rounded-full bg-indigo-soft font-bold" onClick={() => setQty(product.slug, qty + 1)} aria-label="Increase">+</button>
                  <button className="ml-auto text-xs font-semibold text-ink/60 underline" onClick={() => remove(product.slug)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3 border-t border-indigo/10 p-5">
          <div className="flex justify-between text-sm"><span>Delivery</span><span className="font-semibold">Digital delivery included</span></div>
          <div className="flex justify-between text-lg font-extrabold"><span>Total</span><span>{money(total)}</span></div>
          <Link href="/checkout" onClick={() => setDrawerOpen(false)} className={`btn-primary w-full ${lines.length === 0 ? 'pointer-events-none opacity-50' : ''}`}>Checkout</Link>
          <Link href="/cart" onClick={() => setDrawerOpen(false)} className="btn-ghost w-full">View cart</Link>
        </div>
      </aside>
    </div>
  );
}
