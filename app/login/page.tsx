'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login } from '@/lib/auth';
import { useStore } from '@/components/Providers';

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useStore();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = await login(email.trim(), pw);
    if (!r.ok) return setErr(r.error || 'Could not log in.');
    setUser(r.user!);
    router.push('/dashboard');
  }

  return (
    <div className="wrap section">
      <form onSubmit={submit} className="card mx-auto max-w-md space-y-4 p-8">
        <h1 className="h2">Welcome back</h1>
        <div><label className="label" htmlFor="e">Email</label><input id="e" type="email" required className="input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></div>
        <div><label className="label" htmlFor="p">Password</label><input id="p" type="password" required className="input" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="current-password" /></div>
        {err && <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">{err}</p>}
        <button className="btn-primary w-full" type="submit">Log in</button>
        <p className="text-center text-sm">New here? <Link href="/register" className="font-bold text-indigo underline">Create an account</Link></p>
      </form>
    </div>
  );
}
