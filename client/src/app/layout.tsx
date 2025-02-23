import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frankiefab.com"),
  title: {
    default: "Frankiefab | Personal Website",
    template: "%s | Frankiefab",
  },
  description:
    "A portfolio website by Franklin Ohaegbulam featuring his short bio, side projects, writing and talks",
  keywords: [
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Frontend Developer",
    "Portfolio",
    "Blog",
    "Technical Writer",
    "Open Source Developer",
    "Design Engineer",
  ],
  authors: [{ name: "Franklin Ohaegbulam" }],
  creator: "Franklin Ohaegbulam",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frankiefab.com",
    title: "Frankiefab | Personal Website",
    description:
      "A portfolio website by Franklin Ohaegbulam featuring his bio, tech stacks, side projects, writing and talks",
    siteName: "Frankiefab",
    images: [
      {
        url: "/images/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Frankiefab Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@frankiefab100",
    creator: "@frankiefab100",
    title: "Frankiefab | Personal Website",
    description:
      "A portfolio website by Franklin Ohaegbulam featuring his bio, tech stacks, side projects, writing and talks",
    images: [
      {
        url: "/images/OG-image.png",
        width: 1200,
        height: 630,
        alt: "Frankiefab Portfolio",
      },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="/images/background-noise.webp"
          as="image"
          type="image/webp"
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative min-h-screen">
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="bg-noise flex-grow bg-white dark:bg-background">
                {children}
                <Analytics />
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
