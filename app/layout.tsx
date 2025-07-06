import './globals.css';
import { Darker_Grotesque } from 'next/font/google';
import Head from 'next/head';
import Nav from '@/components/msnav';
import Footer from '@/components/Footer';
import NewsletterSection from '@/components/msnewsletter';
import Upcoming from '@/components/upcoming';


const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-darker-grotesque',
});


export const metadata = {
  title: 'Ask MrzSparkles',
  description: 'Elevate your love life with clarity and confidence',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-Lato">
        <Nav />
        <Upcoming />
        {children}
        <NewsletterSection />
        <Footer />

      </body>
    </html>
  );
}

