// import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Template Saas',
  description: 'Template Saas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  bg-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
