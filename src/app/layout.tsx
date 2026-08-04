import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Venkatesh Manipati — MERN Stack Developer & AI/ML Engineer',
  description:
    'Portfolio of Venkatesh Manipati — BTech CSE Final Year at SRM University-AP. Full-Stack Developer specializing in MERN stack, AI/ML, and production-grade systems. Available for internships and full-time roles.',
  keywords: [
    'Venkatesh Manipati',
    'MERN Stack Developer',
    'Full Stack Developer',
    'AI ML Engineer',
    'React Next.js Developer',
    'SRM University AP',
    'Portfolio',
  ],
  authors: [{ name: 'Venkatesh Manipati', url: 'https://github.com/venkatesh-614' }],
  creator: 'Venkatesh Manipati',
  openGraph: {
    type: 'website',
    title: 'Venkatesh Manipati — Developer Portfolio',
    description:
      'Full-Stack Developer & AI/ML Engineer. Building next-gen systems with MERN, TypeScript, and Python.',
    siteName: 'Venkatesh Manipati Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Venkatesh Manipati — Developer Portfolio',
    description: 'Full-Stack Developer & AI/ML Engineer.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-obsidian text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
