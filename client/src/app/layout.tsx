import "./styles/globals.css";
// import type { Metadata } from "next";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
// import BackgroundGrid from "@/components/shared/gridbg";

const montserrat = Montserrat({ subsets: ["latin"] });

// export const metadata: Metadata = {
export const metadata = {
  title: "Frankiefab | Portfolio Website",
  description:
    "A portfolio website by Franklin Ohaegbulam featuring his short bio, side projects, writing and talks",
  applicationName: "Frankiefab",
  openGraph: {
    title: "Frankiefab | Portfolio Website",
    description:
      "A portfolio website by Franklin Ohaegbulam featuring his bio, tech stacks, side projects, writing and talks",
    url: "https://frankiefab.com",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "https://frankiefab.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://frankiefab.com",
    title: "Frankiefab | Portfolio Website",
    description:
      "A portfolio website by Franklin Ohaegbulam featuring his bio, tech stacks, side projects, writing and talks",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
      },
    ],
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
        <title>{metadata.title}</title>
        <link rel="icon" href="./favicon.ico" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content="Franklin Ohaegbulam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="JavaScript,Typescript, ReactJS, NextJS,frontend developer,website, portfolio, blog site, technical writer, Open source developer, Design engineer"
        />
      </Head>
      <body className={montserrat.className}>
        <div className="relative min-h-screen">
          {/* Background noise */}
          {/* <div
            className="fixed inset-0 bg-noise opacity-10 bg-repeat"
            style={{ mixBlendMode: "multiply" }}
          /> */}
          {/* <BackgroundGrid /> */}
          {/* <div
            className="bg-background absolute bg-noise bg-cover bg-center"
            style={{ mixBlendMode: "multiply" }}
          /> */}

          {/* Web content */}
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
