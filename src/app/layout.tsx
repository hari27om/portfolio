import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hari27om.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Hari Om Tripathi | Software Engineer",
  description:
    "Portfolio of Hari Om Tripathi, Software Engineer specializing in React, Node.js, TypeScript, mobile apps and scalable backend systems.",
  keywords: [
    "Hari Om Tripathi",
    "Full Stack Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "React Native",
    "Expo",
    "MongoDB",
    "REST API Development",
    "Mobile App Development",
    "Backend Developer",
  ],
  authors: [{ name: "Hari Om Tripathi", url: siteUrl }],
  creator: "Hari Om Tripathi",
  publisher: "Hari Om Tripathi",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Hari Om Tripathi | Full Stack Software Engineer",
    description:
      "Explore web, mobile, and backend product work by Hari Om Tripathi, focused on React, Node.js, TypeScript, APIs, and practical product delivery.",
    url: "/",
    siteName: "Hari Om Tripathi Portfolio",
    images: [
      {
        url: "/portfolio-hero.png",
        width: 1254,
        height: 1254,
        alt: "Abstract developer workspace illustration for Hari Om Tripathi portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Om Tripathi | Full Stack Software Engineer",
    description:
      "Portfolio focused on React, Node.js, TypeScript, mobile apps, APIs, and scalable product workflows.",
    images: ["/portfolio-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
