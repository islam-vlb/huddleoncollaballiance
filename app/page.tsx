import Link from 'next/link';
import { CATEGORIES, PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const STEPS = [
  { n: '01', t: 'Pick your toolkit', d: 'Browse templates, workbooks and playbooks written for real team situations.' },
  { n: '02', t: 'Check out securely', d: 'Pay once with Visa or Mastercard. Digital delivery is included in every price.' },
  { n: '03', t: 'Download and use', d: 'Files appear in your account Downloads section and are sent to your email after payment.' },
];

export default function Home() {
  const featured = [PRODUCTS[1], PRODUCTS[5], PRODUCTS[7], PRODUCTS[8]];
  return (
    <>
      <section className="wrap section grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Team collaboration, ready to download</span>
          <h1 className="h1 mt-5">
            Better meetings. Clearer projects. <span className="bg-gradient-to-r from-indigo to-teal bg-clip-text text-transparent">Stronger teams.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/75">
            HuddleOnCollabAlliance.com creates practical, printable and fillable templates, toolkits and playbooks that help teams of any size plan, meet and work together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn-primary">Browse the shop</Link>
            <Link href="/about" className="btn-ghost">How we work</Link>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[['16', 'digital products'], ['4', 'categories'], ['PDF', 'instant formats']].map(([a, b]) => (
              <div key={b}>
                <dt className="font-display text-3xl font-extrabold text-indigo">{a}</dt>
                <dd className="text-xs font-semibold uppercase tracking-wide text-ink/60">{b}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rotate-3 rounded-[40px] bg-gradient-to-br from-indigo/20 to-teal/30" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero.png" alt="Abstract team workspace dashboard illustration" className="w-full rounded-[32px] border border-indigo/10 shadow-soft" />
        </div>
      </section>

      <section className="wrap section pt-0">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="eyebrow">Categories</span>
            <h2 className="h2 mt-3">Find the right kit for the job</h2>
          </div>
          <Link href="/shop" className="hidden text-sm font-bold text-indigo underline sm:block">See all products</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/shop?category=${c.slug}`} className="card group overflow-hidden transition hover:-translate-y-1">
              <div className="imgbox aspect-[4/3] rounded-b-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt={c.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="h3">{c.name}</h3>
                <p className="mt-1 text-sm text-ink/70">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap section">
          <span className="eyebrow">How it works</span>
          <h2 className="h2 mt-3">From checkout to download in minutes</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="card p-6">
                <span className="font-display text-4xl font-extrabold text-teal">{s.n}</span>
                <h3 className="h3 mt-3">{s.t}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="eyebrow">Featured</span>
            <h2 className="h2 mt-3">Popular toolkits for working teams</h2>
          </div>
          <Link href="/shop" className="hidden text-sm font-bold text-indigo underline sm:block">Shop all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section className="wrap pb-20">
        <div className="grid items-center gap-8 overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-deep to-indigo p-8 text-white sm:p-12 lg:grid-cols-2">
          <div>
            <h2 className="h2">Built for the way teams really work</h2>
            <p className="mt-4 leading-7 text-white/80">
              Every pack is written by practitioners in plain language, with timing guidance, fill-in fields and examples. Use them in meeting rooms, on shared screens or in your own tools.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-white/90">
              <li>Printable at 8.5 x 11 inches</li>
              <li>Fillable on tablet or laptop</li>
              <li>One-time purchase, no account required to browse</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <Link href="/shop" className="btn-teal">Start browsing</Link>
            <Link href="/digital-delivery" className="text-sm font-semibold underline">How digital delivery works</Link>
          </div>
        </div>
      </section>
    </>
  );
}
