import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Digital Delivery' };

export default function DigitalDelivery() {
  return (
    <div className="wrap section">
      <article className="prose-legal mx-auto max-w-3xl">
        <span className="eyebrow">Policy</span>
        <h1 className="h1 mt-4 !text-4xl">Digital Delivery</h1>

        <h2>No physical shipping</h2>
        <p>Everything sold on {SITE.domain} is a digital product. Nothing is mailed to you and there is no shipping fee. Digital delivery is included in every price.</p>

        <h2>How you receive your files</h2>
        <ul>
          <li>After payment, your files are added to the <strong>My Downloads</strong> section of your account dashboard.</li>
          <li>A delivery email with your order details is sent to the email address entered at checkout.</li>
          <li>To see your downloads, <Link href="/register" className="font-bold text-indigo underline">create an account</Link> or <Link href="/login" className="font-bold text-indigo underline">log in</Link> with the same email used at checkout.</li>
        </ul>

        <h2>Formats and requirements</h2>
        <p>Files are PDF documents sized for 8.5 x 11 inches. You can open them with any PDF reader on a computer, tablet or phone, and print them on standard letter-size paper.</p>

        <h2>Titles being prepared</h2>
        <p>Some titles are still being finalized. If a purchased title is not ready yet, it appears as &quot;Preparing - check back soon&quot; in My Downloads and becomes available there when released. You may request a refund within 30 days of purchase at any time.</p>

        <h2>Problems with a download</h2>
        <p>If a file does not open or you cannot find it, contact us at <a className="font-bold underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> or {SITE.phone} and we will help.</p>

        <p>{SITE.corp} (DBA {SITE.dba}), {SITE.address}.</p>
      </article>
    </div>
  );
}
