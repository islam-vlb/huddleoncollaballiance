'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getLastOrder, getOrder, type Order } from '@/lib/orders';
import { money } from '@/lib/products';
import { SITE } from '@/lib/site';

export default function ConfirmationClient() {
  const id = useSearchParams().get('order');
  const [order, setOrder] = useState<Order | undefined>();
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOrder((id && getOrder(id)) || getLastOrder());
    setDone(true);
  }, [id]);

  if (!done) return <div className="wrap section">Loading your order...</div>;
  if (!order) {
    return (
      <div className="wrap section">
        <div className="card p-10 text-center">
          <h1 className="h2">We could not find that order</h1>
          <p className="mt-2 text-ink/70">Contact us at {SITE.email} or {SITE.phone} and we will help.</p>
          <Link href="/shop" className="btn-primary mt-5">Back to the shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap section">
      <div className="card mx-auto max-w-2xl p-8">
        <span className="eyebrow">Order confirmed</span>
        <h1 className="h1 mt-4 !text-3xl sm:!text-4xl">Thank you, {order.name || 'friend'}.</h1>
        <p className="mt-3 text-ink/75">
          Your order number is <strong>{order.id}</strong>. Your files are delivered to the Downloads section of your account and sent to {order.email} after payment.
        </p>
        <ul className="mt-6 divide-y divide-indigo/10 rounded-2xl border border-indigo/10">
          {order.items.map((i) => (
            <li key={i.slug} className="flex justify-between p-4 text-sm"><span>{i.name} x {i.qty}</span><span className="font-semibold">{money(i.price * i.qty)}</span></li>
          ))}
          <li className="flex justify-between p-4 text-sm"><span>Delivery</span><span>Digital delivery included</span></li>
          <li className="flex justify-between p-4 text-lg font-extrabold"><span>Total</span><span>{money(order.total)}</span></li>
        </ul>
        <p className="mt-5 text-sm leading-6 text-ink/75">
          Your card was charged by <strong>{SITE.descriptor}</strong> for this one-time payment. Questions? Call <a className="font-bold underline" href={SITE.phoneHref}>{SITE.phone}</a> or email <a className="font-bold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard" className="btn-primary">Go to My Downloads</Link>
          <Link href="/shop" className="btn-ghost">Keep shopping</Link>
        </div>
      </div>
    </div>
  );
}
