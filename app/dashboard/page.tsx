'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStore } from '@/components/Providers';
import { getOrdersFor, type Order } from '@/lib/orders';
import { getProduct, money } from '@/lib/products';
import { updateAccount } from '@/lib/auth';
import { SITE } from '@/lib/site';

const TABS = ['My Orders', 'My Downloads', 'Support', 'Account Settings'] as const;
type Tab = (typeof TABS)[number];

export default function Dashboard() {
  const router = useRouter();
  const { user, ready, setUser, signOut } = useStore();
  const [tab, setTab] = useState<Tab>('My Orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [name, setName] = useState('');
  const [pw, setPw] = useState('');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (ready && !user) router.replace('/login');
    if (user) {
      setOrders(getOrdersFor(user.email));
      setName(user.name);
    }
  }, [ready, user, router]);

  if (!user) return <div className="wrap section">Loading...</div>;

  const owned = new Map<string, number>();
  orders.forEach((o) => o.items.forEach((i) => owned.set(i.slug, (owned.get(i.slug) || 0) + i.qty)));

  async function save(e: React.FormEvent) {
    e.preventDefault();
    const u = await updateAccount(user!, name.trim() || user!.name, pw.length >= 8 ? pw : undefined);
    setUser(u);
    setPw('');
    setMsg('Your settings have been saved.');
  }

  return (
    <div className="wrap section">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1 className="h1 mt-3 !text-3xl sm:!text-4xl">Hello, {user.name.split(' ')[0]}</h1>
        </div>
        <button className="btn-ghost" onClick={() => { signOut(); router.push('/'); }}>Log out</button>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={`rounded-full px-4 py-2 text-sm font-bold ${tab === t ? 'bg-indigo text-white' : 'bg-white text-indigo ring-1 ring-indigo/20'}`}>{t}</button>
        ))}
      </div>

      <div className="mt-6">
        {tab === 'My Orders' && (
          orders.length === 0 ? (
            <div className="card p-8 text-center"><p className="text-ink/70">No orders yet.</p><Link href="/shop" className="btn-primary mt-4">Browse the shop</Link></div>
          ) : (
            <div className="space-y-4">
              {orders.map((o) => (
                <div key={o.id} className="card p-6">
                  <div className="flex flex-wrap justify-between gap-2">
                    <p className="font-display text-lg font-extrabold">{o.id}</p>
                    <p className="text-sm text-ink/60">{new Date(o.date).toLocaleDateString('en-US')} | Charged by {o.descriptor}</p>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm">{o.items.map((i) => <li key={i.slug} className="flex justify-between"><span>{i.name} x {i.qty}</span><span>{money(i.price * i.qty)}</span></li>)}</ul>
                  <p className="mt-3 flex justify-between border-t border-indigo/10 pt-3 font-extrabold"><span>Total</span><span>{money(o.total)}</span></p>
                </div>
              ))}
            </div>
          )
        )}

        {tab === 'My Downloads' && (
          owned.size === 0 ? (
            <div className="card p-8 text-center"><p className="text-ink/70">Purchased files will appear here after your first order.</p></div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {Array.from(owned.keys()).map((slug) => {
                const p = getProduct(slug);
                if (!p) return null;
                return (
                  <div key={slug} className="card flex items-center gap-4 p-4">
                    <div className="imgbox h-20 w-20 shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold leading-5">{p.name}</p>
                      {p.downloadFile ? (
                        <a href={p.downloadFile} download className="btn-primary mt-2 !px-4 !py-2">Download PDF</a>
                      ) : (
                        <p className="mt-2 inline-block rounded-full bg-indigo-soft px-3 py-1 text-xs font-bold text-indigo">Preparing - check back soon</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}

        {tab === 'Support' && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-6">
              <h2 className="h3">Contact support</h2>
              <p className="mt-2 text-sm leading-6 text-ink/75">Our team answers Monday to Friday, 9 AM to 5 PM Pacific Time.</p>
              <p className="mt-3 text-sm">Phone: <a className="font-bold underline" href={SITE.phoneHref}>{SITE.phone}</a></p>
              <p className="text-sm">Email: <a className="font-bold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
              <p className="mt-3 text-sm text-ink/70">{SITE.corp}, {SITE.address}</p>
            </div>
            <form className="card space-y-3 p-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <h2 className="h3">Send a message</h2>
              <textarea required rows={4} className="input" placeholder="How can we help?" />
              <button className="btn-primary" type="submit">Send message</button>
              {sent && <p className="text-sm font-semibold text-teal-deep">Thanks. Your message was received and we will reply by email.</p>}
            </form>
          </div>
        )}

        {tab === 'Account Settings' && (
          <form onSubmit={save} className="card max-w-md space-y-4 p-6">
            <div><label className="label" htmlFor="sn">Full name</label><input id="sn" className="input" value={name} onChange={(e) => setName(e.target.value)} /></div>
            <div><label className="label" htmlFor="se">Email</label><input id="se" className="input" value={user.email} disabled /></div>
            <div><label className="label" htmlFor="sp">New password (optional)</label><input id="sp" type="password" className="input" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="new-password" /></div>
            <button className="btn-primary" type="submit">Save changes</button>
            {msg && <p className="text-sm font-semibold text-teal-deep">{msg}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
