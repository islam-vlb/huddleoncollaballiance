'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CATEGORIES, PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ShopClient() {
  const params = useSearchParams();
  const cat = params.get('category');
  const active = CATEGORIES.find((c) => c.slug === cat);
  const list = active ? PRODUCTS.filter((p) => p.category === active.slug) : PRODUCTS;

  return (
    <div className="wrap section">
      <span className="eyebrow">Shop</span>
      <h1 className="h1 mt-4 !text-4xl sm:!text-5xl">{active ? active.name : 'All digital products'}</h1>
      <p className="mt-3 max-w-2xl text-ink/70">{active ? active.blurb : 'Templates, toolkits, playbooks and workshop kits for team collaboration. Digital delivery is included with every purchase.'}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/shop" className={`rounded-full px-4 py-2 text-sm font-bold ${!active ? 'bg-indigo text-white' : 'bg-white text-indigo ring-1 ring-indigo/20 hover:ring-indigo'}`}>All</Link>
        {CATEGORIES.map((c) => (
          <Link key={c.slug} href={`/shop?category=${c.slug}`} className={`rounded-full px-4 py-2 text-sm font-bold ${active?.slug === c.slug ? 'bg-indigo text-white' : 'bg-white text-indigo ring-1 ring-indigo/20 hover:ring-indigo'}`}>
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.slug} p={p} />)}
      </div>
    </div>
  );
}
