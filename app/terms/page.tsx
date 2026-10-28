import { PRODUCTS, money } from '@/lib/products';
import { SITE } from '@/lib/site';

export const metadata = { title: 'Terms & Conditions' };

export default function Terms() {
  return (
    <div className="wrap section">
      <article className="prose-legal mx-auto max-w-3xl">
        <span className="eyebrow">Legal</span>
        <h1 className="h1 mt-4 !text-4xl">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-ink/60">Effective date: October 28, 2026</p>

        <h2>1. Who we are</h2>
        <p>
          {SITE.domain} is operated by {SITE.corp}, doing business as {SITE.dba}, {SITE.address}. Customer service: {SITE.phone}, {SITE.email}. By using this website or placing an order you agree to these Terms &amp; Conditions.
        </p>

        <h2>2. Eligibility</h2>
        <p>You must be 18 or older to purchase. Purchases are available to customers with a billing address in the United States only.</p>

        <h2>3. Products</h2>
        <p>We sell digital templates, toolkits, playbooks and workshop kits in downloadable document formats. Descriptions on each product page, including page counts, formats and included items, describe what you receive. Some titles are prepared for release after purchase; these show as &quot;Preparing - check back soon&quot; in My Downloads until the file is available.</p>

        <h2>4. Prices and payment</h2>
        <p>All prices are in U.S. dollars and are one-time payments. Delivery of digital products is included in the price and there is no shipping fee. We accept Visa and Mastercard only. Your card will be charged by {SITE.descriptor} for this one-time payment. This charge descriptor will appear on your card statement.</p>
        <p>Current product prices:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead><tr className="border-b border-indigo/20"><th className="py-2 pr-4">Product</th><th className="py-2">Price</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.slug} className="border-b border-indigo/10"><td className="py-2 pr-4">{p.name}</td><td className="py-2 font-semibold">{money(p.price)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>5. Digital delivery</h2>
        <p>After payment, purchased files are delivered to the Downloads section of your account and by email. No physical product is shipped. See our Digital Delivery page for details.</p>

        <h2>6. License and permitted use</h2>
        <p>Each purchase gives you a personal, non-exclusive, non-transferable license to use the files for your own team or organization. You may print and edit the documents for internal use. You may not resell, redistribute, publish or share the files outside your organization, or present them as your own work.</p>

        <h2>7. Refunds</h2>
        <p>You may request a refund within 30 days of the purchase date. Requests are assessed by our support team as described in our Refund Policy.</p>

        <h2>8. Accounts</h2>
        <p>You are responsible for keeping your password confidential and for activity under your account. Provide accurate information and tell us promptly if you believe your account was used without permission.</p>

        <h2>9. Intellectual property</h2>
        <p>All content, layouts, text and graphics on this website and in our files are owned by {SITE.corp} or its licensors and protected by copyright law.</p>

        <h2>10. Disclaimer</h2>
        <p>Our templates and guides are general informational and organizational tools. They are provided as is and are not legal, financial or professional advice. Results depend on how you apply the materials in your own organization.</p>

        <h2>11. Limitation of liability</h2>
        <p>To the fullest extent permitted by law, {SITE.corp} is not liable for indirect, incidental or consequential damages arising from use of the website or files. Our total liability for any claim is limited to the amount you paid for the product at issue.</p>

        <h2>12. Privacy</h2>
        <p>Your use of this website is also governed by our Privacy Policy. Personal information will not be shared with Third Parties.</p>

        <h2>13. Governing law</h2>
        <p>These terms are governed by the laws of the State of California, without regard to conflict of law rules.</p>

        <h2>14. Changes</h2>
        <p>We may update these terms from time to time. The effective date above shows the latest version. Continued use of the website after changes means you accept the updated terms.</p>

        <h2>15. Contact</h2>
        <p>{SITE.corp} (DBA {SITE.dba}), {SITE.address}. Phone: {SITE.phone}. Email: {SITE.email}.</p>
      </article>
    </div>
  );
}
