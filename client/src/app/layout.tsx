import "./styles/globals.css";
import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frankiefab.com"),
  title: {
    default: "Frankiefab | Portfolio Website",
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
    title: "Frankiefab | Portfolio Website",
    description:
      "A portfolio website by Franklin Ohaegbulam featuring his bio, tech stacks, side projects, writing and talks",
    siteName: "Frankiefab",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "Frankiefab | Portfolio Website",
    description:
      "A portfolio website by Franklin Ohaegbulam featuring his bio, tech stacks, side projects, writing and talks",
    images: [
      {
        url: "/og-image.jpg",
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
  // verification: {
  //   google: "",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="relative min-h-screen">
          <div className="bg-white dark:bg-black relative z-10 flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
