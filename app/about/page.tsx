import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata = { title: 'About' };

const VALUES = [
  { t: 'Practical first', d: 'Every template is built to be used in a real meeting or project the same day.' },
  { t: 'Plain language', d: 'No jargon walls. Clear steps, timing guidance and examples.' },
  { t: 'Made for every team', d: 'Small startups, remote crews and department leads can all adapt our kits.' },
];

export default function About() {
  return (
    <>
      <section className="wrap section grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="eyebrow">About us</span>
          <h1 className="h1 mt-4 !text-4xl sm:!text-5xl">We help teams huddle up and get things done</h1>
          <p className="mt-5 leading-8 text-ink/75">
            {SITE.domain} publishes downloadable templates, toolkits and playbooks for team collaboration. Our goal is simple: give managers, project leads and facilitators well-organized materials so they can spend less time building documents and more time working with their people.
          </p>
          <p className="mt-4 leading-8 text-ink/75">
            The store is operated by {SITE.corp}, doing business as {SITE.dba}. Customer service is available at {SITE.phone} and {SITE.email}.
          </p>
          <Link href="/shop" className="btn-primary mt-6">Explore the shop</Link>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/about.png" alt="Abstract interlocking shapes representing teamwork" className="w-full rounded-[32px] border border-indigo/10 shadow-soft" />
      </section>
      <section className="wrap pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.t} className="card p-6">
              <h2 className="h3">{v.t}</h2>
              <p className="mt-2 text-sm leading-6 text-ink/70">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
