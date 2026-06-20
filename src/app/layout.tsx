import type { Metadata } from 'next';
import { Outfit, Geist_Mono, Quicksand } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
});

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Haider Ali Tariq Cheema | HTC',
  description: 'Portfolio showcasing projects of mobile and web apps with modern technologies.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${quicksand.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
