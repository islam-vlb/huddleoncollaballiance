'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { PRODUCTS, getProduct } from '@/lib/products';
import { getSession, logout as doLogout, type User } from '@/lib/auth';

type CartLine = { slug: string; qty: number };

type Store = {
  ready: boolean;
  lines: { product: (typeof PRODUCTS)[number]; qty: number }[];
  count: number;
  total: number;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (v: boolean) => void;
  wishlist: string[];
  toggleWish: (slug: string) => void;
  user: User | null;
  setUser: (u: User | null) => void;
  signOut: () => void;
};

const Ctx = createContext<Store | null>(null);
const CART_KEY = 'huddleon_cart';
const WISH_KEY = 'huddleon_wishlist';

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error('Store missing');
  return c;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem(CART_KEY) || '[]'));
      setWishlist(JSON.parse(localStorage.getItem(WISH_KEY) || '[]'));
    } catch {
      /* ignore */
    }
    setUser(getSession());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, ready]);
  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, ready]);

  const add = useCallback((slug: string, qty = 1) => {
    setCart((c) => {
      const f = c.find((l) => l.slug === slug);
      if (f) return c.map((l) => (l.slug === slug ? { ...l, qty: Math.min(l.qty + qty, 10) } : l));
      return [...c, { slug, qty }];
    });
    setDrawerOpen(true);
  }, []);
  const setQty = useCallback((slug: string, qty: number) => {
    setCart((c) => c.map((l) => (l.slug === slug ? { ...l, qty: Math.max(1, Math.min(qty, 10)) } : l)));
  }, []);
  const remove = useCallback((slug: string) => setCart((c) => c.filter((l) => l.slug !== slug)), []);
  const clear = useCallback(() => setCart([]), []);
  const toggleWish = useCallback(
    (slug: string) => setWishlist((w) => (w.includes(slug) ? w.filter((s) => s !== slug) : [...w, slug])),
    [],
  );
  const signOut = useCallback(() => {
    doLogout();
    setUser(null);
  }, []);

  const value = useMemo<Store>(() => {
    const lines = cart
      .map((l) => ({ product: getProduct(l.slug)!, qty: l.qty }))
      .filter((l) => l.product);
    const total = Math.round(lines.reduce((s, l) => s + l.product.price * l.qty * 100, 0)) / 100;
    return {
      ready,
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      total,
      add,
      setQty,
      remove,
      clear,
      drawerOpen,
      setDrawerOpen,
      wishlist,
      toggleWish,
      user,
      setUser,
      signOut,
    };
  }, [cart, ready, add, setQty, remove, clear, drawerOpen, wishlist, toggleWish, user, signOut]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
