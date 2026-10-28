'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { register } from '@/lib/auth';
import { useStore } from '@/components/Providers';

export default function RegisterPage() {
  const router = useRouter();
  const { setUser } = useStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pw.length < 8) return setErr('Password must be at least 8 characters.');
    const r = await register(name.trim(), email.trim(), pw);
    if (!r.ok) return setErr(r.error || 'Could not create account.');
    setUser(r.user!);
    router.push('/dashboard');
  }

  return (
    <div className="wrap section">
      <form onSubmit={submit} className="card mx-auto max-w-md space-y-4 p-8">
        <h1 className="h2">Create your account</h1>
        <p className="text-sm text-ink/70">Use the same email at checkout to see your orders and downloads.</p>
        <div><label className="label" htmlFor="n">Full name</label><input id="n" required className="input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></div>
        <div><label className="label" htmlFor="e">Email</label><input id="e" type="email" required className="input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></div>
        <div><label className="label" htmlFor="p">Password</label><input id="p" type="password" required className="input" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="new-password" /></div>
        {err && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{err}</p>}
        <button className="btn-primary w-full" type="submit">Create account</button>
        <p className="text-center text-sm">Already registered? <Link href="/login" className="font-bold text-indigo underline">Log in</Link></p>
      </form>
    </div>
  );
}
