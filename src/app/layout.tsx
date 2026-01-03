import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Poppins } from 'next/font/google';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ICLEAS 2026 - International Conference on Life, Environmental & Applied Sciences | June 25-26',
  description: 'Join ICLEAS 2026 online. Submit research papers on life sciences, environmental studies, and applied technologies. Keynotes from leading researchers, June 25-26, 2026.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen bg-background antialiased',
          poppins.variable
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
