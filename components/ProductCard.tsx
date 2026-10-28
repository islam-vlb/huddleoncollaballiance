import Link from 'next/link';
import { getCategory, money, type Product } from '@/lib/products';

export default function ProductCard({ p }: { p: Product }) {
  const cat = getCategory(p.category);
  return (
    <Link href={`/product/${p.slug}`} className="card group flex flex-col p-3 transition duration-200 hover:-translate-y-1 hover:border-indigo/40">
      <div className="imgbox aspect-square">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-3 pt-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-deep">{cat?.name}</span>
        <h3 className="h3 mt-1 leading-snug">{p.name}</h3>
        <p className="mt-1 flex-1 text-sm text-ink/70">{p.summary}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-xl font-extrabold text-indigo">{money(p.price)}</span>
          <span className="rounded-full bg-indigo-soft px-3 py-1 text-xs font-bold text-indigo">View details</span>
        </div>
      </div>
    </Link>
  );
}
