import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Gnanendra Reddy | Senior Data Analyst',
  description:
    'Senior Data Analyst with 8+ years building reliable data pipelines, catching quality issues at scale, and shipping AI-augmented analytics tooling. Previously CDC, Teladoc, Cognizant.',
  keywords: [
    'Data Analyst',
    'Data Engineer',
    'PySpark',
    'SQL',
    'Python',
    'Power BI',
    'CDC',
    'Teladoc',
    'Calgary',
    'Canada',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#080c14] text-slate-100">
        {children}
      </body>
    </html>
  );
}
