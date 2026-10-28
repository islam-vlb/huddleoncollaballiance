'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useStore } from '@/components/Providers';
import PayLogos from '@/components/PayLogos';
import { money } from '@/lib/products';
import { SITE } from '@/lib/site';
import { newOrderId, saveOrder } from '@/lib/orders';

const STATES = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

function validCard(num: string) {
  const d = num.replace(/\s+/g, '');
  if (!/^\d{16}$/.test(d)) return false;
  const isVisa = d[0] === '4';
  const p2 = parseInt(d.slice(0, 2), 10);
  const p4 = parseInt(d.slice(0, 4), 10);
  const isMc = (p2 >= 51 && p2 <= 55) || (p4 >= 2221 && p4 <= 2720);
  if (!isVisa && !isMc) return false;
  let sum = 0;
  for (let i = 0; i < 16; i++) {
    let n = parseInt(d[15 - i], 10);
    if (i % 2 === 1) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
  }
  return sum % 10 === 0;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { lines, total, clear, user, ready } = useStore();
  const [f, setF] = useState({ first: '', last: '', email: '', phone: '', street: '', city: '', state: '', zip: '', card: '', exp: '', cvc: '' });
  const [agree, setAgree] = useState(false);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user) setF((x) => ({ ...x, email: x.email || user.email, first: x.first || user.name.split(' ')[0] || '', last: x.last || user.name.split(' ').slice(1).join(' ') }));
  }, [user]);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr('');
    if (!agree) return setErr('Please accept the Terms & Conditions to continue.');
    if (!/^\d{5}(-\d{4})?$/.test(f.zip)) return setErr('Enter a valid 5-digit ZIP code.');
    if (f.phone.replace(/\D/g, '').length < 10) return setErr('Enter a valid phone number.');
    if (!validCard(f.card)) return setErr('Enter a valid Visa or Mastercard number. Only Visa and Mastercard are accepted.');
    if (!/^(0[1-9]|1[0-2])\s*\/\s*\d{2}$/.test(f.exp)) return setErr('Enter the expiry date as MM / YY.');
    if (!/^\d{3}$/.test(f.cvc)) return setErr('Enter the 3-digit security code.');
    setBusy(true);
    const id = newOrderId();
    saveOrder({
      id,
      email: f.email,
      name: `${f.first} ${f.last}`.trim(),
      date: new Date().toISOString(),
      items: lines.map((l) => ({ slug: l.product.slug, name: l.product.name, price: l.product.price, qty: l.qty })),
      total,
      descriptor: SITE.descriptor,
    });
    clear();
    router.push(`/order-confirmation?order=${id}`);
  }

  if (ready && lines.length === 0) {
    return (
      <div className="wrap section">
        <div className="card p-10 text-center">
          <h1 className="h2">Your cart is empty</h1>
          <Link href="/shop" className="btn-primary mt-5">Browse the shop</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wrap section">
      <h1 className="h1 !text-4xl">Checkout</h1>
      <form onSubmit={submit} className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="card p-6">
            <h2 className="h3">Billing details</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div><label className="label" htmlFor="first">First name</label><input id="first" required className="input" value={f.first} onChange={set('first')} autoComplete="given-name" /></div>
              <div><label className="label" htmlFor="last">Last name</label><input id="last" required className="input" value={f.last} onChange={set('last')} autoComplete="family-name" /></div>
              <div><label className="label" htmlFor="email">Email</label><input id="email" type="email" required className="input" value={f.email} onChange={set('email')} autoComplete="email" /></div>
              <div><label className="label" htmlFor="phone">Phone</label><input id="phone" type="tel" required className="input" value={f.phone} onChange={set('phone')} autoComplete="tel" /></div>
              <div className="sm:col-span-2"><label className="label" htmlFor="street">Billing street address</label><input id="street" required className="input" value={f.street} onChange={set('street')} autoComplete="address-line1" /></div>
              <div><label className="label" htmlFor="city">City</label><input id="city" required className="input" value={f.city} onChange={set('city')} autoComplete="address-level2" /></div>
              <div>
                <label className="label" htmlFor="state">State</label>
                <select id="state" required className="input" value={f.state} onChange={set('state')}>
                  <option value="">Select state</option>
                  {STATES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div><label className="label" htmlFor="zip">ZIP code</label><input id="zip" required className="input" value={f.zip} onChange={set('zip')} autoComplete="postal-code" /></div>
              <div>
                <label className="label" htmlFor="country">Country</label>
                <select id="country" className="input" value="United States" disabled><option>United States</option></select>
              </div>
            </div>
          </section>

          <section className="card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="h3">Payment</h2>
              <PayLogos />
            </div>
            <p className="mt-1 text-sm text-ink/60">We accept Visa and Mastercard.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="sm:col-span-3"><label className="label" htmlFor="card">Card number</label><input id="card" required inputMode="numeric" maxLength={19} className="input" value={f.card} onChange={set('card')} autoComplete="cc-number" placeholder="Visa or Mastercard" /></div>
              <div><label className="label" htmlFor="exp">Expiry (MM / YY)</label><input id="exp" required maxLength={7} className="input" value={f.exp} onChange={set('exp')} autoComplete="cc-exp" /></div>
              <div><label className="label" htmlFor="cvc">Security code</label><input id="cvc" required inputMode="numeric" maxLength={3} className="input" value={f.cvc} onChange={set('cvc')} autoComplete="cc-csc" /></div>
            </div>
          </section>

          <section className="card space-y-3 p-6 text-sm leading-6">
            <p>
              Your card will be charged by <strong>{SITE.descriptor}</strong> for this one-time payment. By placing this order I agree to the Terms &amp; Conditions.
            </p>
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-5 w-5 accent-indigo" checked={agree} onChange={(e) => setAgree(e.target.checked)} id="agree" />
              <span>
                I have read and agree to the{' '}
                <Link href="/terms" target="_blank" className="font-extrabold text-indigo underline">Terms &amp; Conditions</Link> and{' '}
                <Link href="/privacy" target="_blank" className="font-extrabold text-indigo underline">Privacy Policy</Link>.
              </span>
            </label>
            <p className="font-semibold">You must be 18 or older to purchase.</p>
            <p>Personal information will not be shared with Third Parties.</p>
            {err && <p role="alert" className="rounded-xl bg-red-50 p-3 font-semibold text-red-700">{err}</p>}
            <button type="submit" className="btn-primary w-full sm:w-auto" disabled={!agree || busy}>Place Order</button>
          </section>
        </div>

        <aside className="card h-fit p-6">
          <h2 className="h3">Order summary</h2>
          <ul className="mt-4 space-y-3">
            {lines.map(({ product, qty }) => (
              <li key={product.slug} className="flex justify-between gap-3 text-sm">
                <span>{product.name} <span className="text-ink/50">x {qty}</span></span>
                <span className="font-semibold">{money(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-indigo/10 pt-4 text-sm"><span>Delivery</span><span>Digital delivery included</span></div>
          <div className="mt-2 flex justify-between text-lg font-extrabold"><span>Total</span><span>{money(total)}</span></div>
          <p className="mt-4 text-xs leading-5 text-ink/60">
            {SITE.corp}, {SITE.address}. Phone {SITE.phone}. Email {SITE.email}.
          </p>
        </aside>
      </form>
    </div>
  );
}
