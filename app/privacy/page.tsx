import { SITE } from '@/lib/site';

export const metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  return (
    <div className="wrap section">
      <article className="prose-legal mx-auto max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="h1 mt-4 !text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink/60">Effective date: October 28, 2026</p>

        <p>This Privacy Policy explains how {SITE.corp}, doing business as {SITE.dba} (&quot;we&quot;, &quot;us&quot;), collects and uses information on {SITE.domain}.</p>
        <p><strong>Personal information will not be shared with Third Parties.</strong></p>

        <h2>1. Information we collect</h2>
        <ul>
          <li>Account details: name, email address and password (stored as a one-way hash in your browser account storage).</li>
          <li>Order details: products purchased, order number, billing address, phone number and email.</li>
          <li>Payment details: card information is entered only to authorize your payment. We do not store full card numbers or security codes on this website.</li>
          <li>Support messages you send us.</li>
          <li>Basic technical data such as browser type and pages visited, to keep the website working.</li>
        </ul>

        <h2>2. How we use information</h2>
        <ul>
          <li>To process payments and deliver digital files to your account and by email.</li>
          <li>To provide customer support and respond to your requests.</li>
          <li>To prevent fraud and keep the website secure.</li>
          <li>To meet legal, tax and accounting obligations.</li>
        </ul>

        <h2>3. Sharing</h2>
        <p>Personal information will not be shared with Third Parties. We use trusted service providers only as needed to process card payments and send order emails on our behalf, and we may disclose information when required by law.</p>

        <h2>4. Cookies and local storage</h2>
        <p>We use your browser&apos;s local storage to keep your cart, wishlist and sign-in session on your device. You can clear this data in your browser settings at any time.</p>

        <h2>5. Retention and security</h2>
        <p>We keep order records as long as needed for accounting, refunds and legal requirements. We use reasonable technical and organizational measures to protect information, but no method of transmission is completely secure.</p>

        <h2>6. Your choices</h2>
        <p>You may ask us to access, correct or delete your personal information by contacting us at {SITE.email} or {SITE.phone}. California residents may have additional rights under California law, and we will honor valid requests.</p>

        <h2>7. Age requirement</h2>
        <p>Our website is intended for adults. You must be 18 or older to purchase, and we do not knowingly collect information from children.</p>

        <h2>8. Changes</h2>
        <p>We may update this policy and will post the new effective date on this page.</p>

        <h2>9. Contact</h2>
        <p>{SITE.corp} (DBA {SITE.dba}), {SITE.address}. Phone: {SITE.phone}. Email: {SITE.email}.</p>
      </article>
    </div>
  );
}
