import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const accent = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-accent" });

export const metadata: Metadata = {
  title: "Frank's Portfolio",
  description: "Francis (Frankie) LiButti: growth engineer and AI systems builder. Ask my AI twin about my work, projects and experience.",
  keywords: [
    "Francis John LiButti",
    "Francis LiButti",
    "Francis J LiButti",
    "Frankie Libutti",
    "Frank LiButti",
    "LiButti",
    "CareerSuite",
    "CareerSuiteai",
    "CareerSuite.Ai",
    "Portfolio", 
    "Developer", 
    "AI", 
    "Interactive", 
    "Memoji", 
    "Web Development",
    "Full Stack",
    "Next.js",
    "React"
  ],
  authors: [
    {
      name: "Frank",
      url: "",
    },
  ],
  creator: "Francis LiButti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Frank's Portfolio",
    description: "Ask my AI twin about my work, projects and experience.",
    siteName: "Frank's Portfolio",
  },
  icons: {
    icon: [
      {
        url: "/fjl.png",
        sizes: "any",
      }
    ],
    shortcut: "/fjl.svg?v=2",
    apple: "/apple-touch-icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          body.variable,
          display.variable,
          accent.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}