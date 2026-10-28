'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="wrap section">
      <span className="eyebrow">Contact</span>
      <h1 className="h1 mt-4 !text-4xl">Talk to our team</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="card p-6 leading-8">
          <h2 className="h3">Customer service</h2>
          <p className="mt-2"><strong>{SITE.corp}</strong> (DBA {SITE.dba})</p>
          <p>{SITE.address}</p>
          <p>Phone: <a className="font-bold underline" href={SITE.phoneHref}>{SITE.phone}</a></p>
          <p>Email: <a className="font-bold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p>Website: {SITE.domain}</p>
          <p className="mt-2 text-sm text-ink/70">Hours: Monday to Friday, 9 AM to 5 PM Pacific Time.</p>
        </div>
        <form className="card space-y-4 p-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div><label className="label" htmlFor="cn">Name</label><input id="cn" required className="input" /></div>
          <div><label className="label" htmlFor="ce">Email</label><input id="ce" type="email" required className="input" /></div>
          <div><label className="label" htmlFor="cm">Message</label><textarea id="cm" rows={5} required className="input" /></div>
          <button className="btn-primary" type="submit">Send message</button>
          {sent && <p className="text-sm font-semibold text-teal-deep">Thank you. We received your message and will reply by email within 2 business days.</p>}
        </form>
      </div>
    </div>
  );
}
