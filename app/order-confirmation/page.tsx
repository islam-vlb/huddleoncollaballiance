import { Suspense } from 'react';
import ConfirmationClient from './ConfirmationClient';

export const metadata = { title: 'Order Confirmation' };

export default function Page() {
  return (
    <Suspense fallback={<div className="wrap section">Loading your order...</div>}>
      <ConfirmationClient />
    </Suspense>
  );
}
