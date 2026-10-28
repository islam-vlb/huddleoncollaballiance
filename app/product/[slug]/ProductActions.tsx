'use client';

import { useState } from 'react';
import { useStore } from '@/components/Providers';

export default function ProductActions({ slug }: { slug: string }) {
  const { add, wishlist, toggleWish } = useStore();
  const [qty, setQty] = useState(1);
  const wished = wishlist.includes(slug);
  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-3">
        <span className="label !mb-0">Quantity</span>
        <div className="flex items-center rounded-full bg-white ring-1 ring-indigo/20">
          <button className="h-10 w-10 rounded-full text-lg font-bold" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">-</button>
          <span className="w-8 text-center font-bold" aria-live="polite">{qty}</span>
          <button className="h-10 w-10 rounded-full text-lg font-bold" onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <button className="btn-primary" onClick={() => add(slug, qty)}>Add to Cart</button>
        <button className="btn-ghost" onClick={() => toggleWish(slug)}>{wished ? 'Remove from Wishlist' : 'Add to Wishlist'}</button>
      </div>
    </div>
  );
}
