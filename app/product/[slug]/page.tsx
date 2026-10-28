import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS, getCategory, getProduct, money } from '@/lib/products';
import ProductActions from './ProductActions';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p ? p.name : 'Product', description: p?.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();
  const cat = getCategory(p.category);

  return (
    <div className="wrap section">
      <nav className="mb-6 text-sm text-ink/60" aria-label="Breadcrumb">
        <Link href="/shop" className="hover:text-indigo">Shop</Link> / <Link href={`/shop?category=${p.category}`} className="hover:text-indigo">{cat?.name}</Link>
      </nav>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="card p-3">
          <div className="imgbox aspect-square">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
          </div>
        </div>
        <div>
          <span className="eyebrow">{cat?.name}</span>
          <h1 className="h1 mt-4 !text-3xl sm:!text-4xl">{p.name}</h1>
          <p className="mt-3 font-display text-3xl font-extrabold text-indigo">{money(p.price)}</p>
          <p className="mt-4 leading-7 text-ink/80">{p.description}</p>
          <ul className="mt-4 space-y-1 text-sm font-semibold text-teal-deep">
            <li>Digital delivery included</li>
            <li>30-day refund policy</li>
          </ul>
          <ProductActions slug={p.slug} />
        </div>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <section className="card p-6">
          <h2 className="h3">Key details</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/80">{p.details.map((d) => <li key={d}>{d}</li>)}</ul>
        </section>
        <section className="card p-6">
          <h2 className="h3">What is included</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/80">{p.includes.map((d) => <li key={d}>{d}</li>)}</ul>
        </section>
        <section className="card p-6">
          <h2 className="h3">Usage and care notes</h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/80">{p.usage.map((d) => <li key={d}>{d}</li>)}</ul>
          <p className="mt-3 text-sm text-ink/80">Keep a backup copy of your downloaded files. Delivery details are on the <Link href="/digital-delivery" className="font-bold text-indigo underline">Digital Delivery</Link> page.</p>
        </section>
      </div>
    </div>
  );
}
