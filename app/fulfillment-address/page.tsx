import { SITE } from '@/lib/site';

export const metadata = { title: 'Fulfillment Address' };

export default function Fulfillment() {
  return (
    <div className="wrap section">
      <article className="prose-legal mx-auto max-w-3xl">
        <span className="eyebrow">Company</span>
        <h1 className="h1 mt-4 !text-4xl">Fulfillment Address</h1>
        <p>Our products are delivered digitally. The address below is our fulfillment, business and return/contact address.</p>
        <div className="card mt-4 p-6 not-italic">
          <p className="!mb-0 leading-8">
            <strong>{SITE.corp}</strong><br />
            DBA {SITE.dba}<br />
            {SITE.address}<br />
            Phone: {SITE.phone}<br />
            Email: {SITE.email}
          </p>
        </div>
        <p className="mt-4">This is the same address used in our Refund Policy for return and contact purposes.</p>
      </article>
    </div>
  );
}
