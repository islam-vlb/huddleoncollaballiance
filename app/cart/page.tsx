'use client';

import Link from 'next/link';
import { useStore } from '@/components/Providers';
import { money } from '@/lib/products';

export default function CartPage() {
  const { lines, total, setQty, remove } = useStore();
  return (
    <div className="wrap section">
      <h1 className="h1 !text-4xl">Your cart</h1>
      {lines.length === 0 ? (
        <div className="card mt-8 p-10 text-center">
          <p className="text-ink/70">Your cart is empty.</p>
          <Link href="/shop" className="btn-primary mt-5">Browse the shop</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {lines.map(({ product, qty }) => (
              <div key={product.slug} className="card flex gap-4 p-4">
                <div className="imgbox h-24 w-24 shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <Link href={`/product/${product.slug}`} className="font-bold hover:text-indigo">{product.name}</Link>
                  <p className="text-sm text-ink/60">{money(product.price)} each</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button className="h-8 w-8 rounded-full bg-indigo-soft font-bold" onClick={() => setQty(product.slug, qty - 1)} aria-label="Decrease">-</button>
                    <span className="w-6 text-center">{qty}</span>
                    <button className="h-8 w-8 rounded-full bg-indigo-soft font-bold" onClick={() => setQty(product.slug, qty + 1)} aria-label="Increase">+</button>
                    <button className="ml-4 text-sm font-semibold underline" onClick={() => remove(product.slug)}>Remove</button>
                  </div>
                </div>
                <p className="font-display text-lg font-extrabold">{money(product.price * qty)}</p>
              </div>
            ))}
          </div>
          <aside className="card h-fit p-6">
            <h2 className="h3">Order summary</h2>
            <div className="mt-4 flex justify-between text-sm"><span>Subtotal</span><span>{money(total)}</span></div>
            <div className="mt-2 flex justify-between text-sm"><span>Delivery</span><span>Digital delivery included</span></div>
            <div className="mt-4 flex justify-between border-t border-indigo/10 pt-4 text-lg font-extrabold"><span>Total</span><span>{money(total)}</span></div>
            <Link href="/checkout" className="btn-primary mt-5 w-full">Proceed to checkout</Link>
          </aside>
        </div>
      )}
    </div>
  );
}
