import { Suspense } from 'react';
import ShopClient from './ShopClient';

export const metadata = { title: 'Shop' };

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="wrap section">Loading products...</div>}>
      <ShopClient />
    </Suspense>
  );
}
