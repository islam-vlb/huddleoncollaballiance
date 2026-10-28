'use client';

import Link from 'next/link';
import { useStore } from '@/components/Providers';
import { getProduct } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  const { wishlist, toggleWish, add } = useStore();
  const items = wishlist.map((s) => getProduct(s)).filter((p): p is NonNullable<ReturnType<typeof getProduct>> => !!p);
  return (
    <div className="wrap section">
      <h1 className="h1 !text-4xl">Your wishlist</h1>
      {items.length === 0 ? (
        <div className="card mt-8 p-10 text-center">
          <p className="text-ink/70">Nothing saved yet. Use Add to Wishlist on any product page.</p>
          <Link href="/shop" className="btn-primary mt-5">Browse the shop</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <div key={p.slug} className="space-y-3">
              <ProductCard p={p} />
              <div className="flex gap-2">
                <button className="btn-primary flex-1 !px-3" onClick={() => add(p.slug)}>Add to Cart</button>
                <button className="btn-ghost !px-3" onClick={() => toggleWish(p.slug)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
