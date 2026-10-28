import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

const body = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body' });
const display = Outfit({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: { default: 'HuddleOnCollabAlliance.com | Team Collaboration Templates and Toolkits', template: '%s | HuddleOnCollabAlliance.com' },
  description: 'Downloadable team collaboration templates, project toolkits, remote team playbooks and workshop kits from HuddleOnCollabAlliance.com.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <Providers>
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <CartDrawer />
        </Providers>
      </body>
    </html>
  );
}
