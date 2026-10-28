import { SITE } from '@/lib/site';

export const metadata = { title: 'Refund Policy' };

export default function Refund() {
  return (
    <div className="wrap section">
      <article className="prose-legal mx-auto max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="h1 mt-4 !text-4xl">Refund Policy</h1>
        <p className="mt-2 text-sm text-ink/60">Effective date: October 28, 2026</p>

        <h2>30-day refund window</h2>
        <p>If a digital product from {SITE.domain} is not what you expected, you may request a refund within 30 days of the purchase date. Because our products are delivered digitally, there is nothing to ship back.</p>

        <h2>How requests are handled</h2>
        <p>Each request is assessed by our support team. We look at the product purchased, the reason for the request and whether the files were delivered and accessible. Approved refunds are returned to the original Visa or Mastercard.</p>

        <h2>How to request a refund</h2>
        <ul>
          <li>Email <a className="font-bold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phone}.</li>
          <li>Include your order number and the email used at checkout.</li>
          <li>Tell us briefly why you are requesting the refund so we can improve our products.</li>
        </ul>

        <h2>Timing</h2>
        <p>We respond within 2 business days. Approved refunds are issued to your card and typically appear within 5 to 10 business days, depending on your card issuer.</p>

        <h2>Products not yet available</h2>
        <p>If a product shows &quot;Preparing - check back soon&quot; in My Downloads, the 30-day period still applies, and you can request a refund at any time within it.</p>

        <h2>Return and contact address</h2>
        <p>
          {SITE.corp} (DBA {SITE.dba})<br />
          {SITE.address}<br />
          Phone: {SITE.phone}<br />
          Email: {SITE.email}
        </p>
      </article>
    </div>
  );
}
