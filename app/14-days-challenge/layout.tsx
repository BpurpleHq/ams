import { Darker_Grotesque } from 'next/font/google';


const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-darker-grotesque',
});

export default function CoupleChallengeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-Lato">
  
        {children}

      </body>
    </html>
  );
}
