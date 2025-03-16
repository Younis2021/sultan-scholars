import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { NavMenu } from '@/components/ui/nav-menu';
import { FooterSection } from '@/components/ui/FooterSection';
import SmoothScroll from '@/components/smooth-scroll';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Sultan Scholars - Study in Türkiye',
  description: 'Discover world-class education opportunities in Türkiye. Join a vibrant community of international students in a country where tradition meets innovation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={`${inter.className} bg-white`} suppressHydrationWarning>
        <NavMenu />
        <SmoothScroll>
          {children}
          <FooterSection />
        </SmoothScroll>
      </body>
    </html>
  );
}