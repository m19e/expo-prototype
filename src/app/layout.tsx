import type { Metadata } from "next";
import localFont from "next/font/local";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const rounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-rounded",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Twinkle Happy Sharing! -2nd SEASON-",
  description: "イルミネーションスターズ ルームシェアアンソロジー",
  openGraph: {
    images: [{
      url: "https://expo-prototype.vercel.app/ogp.webp",
    }],
    title: "Twinkle Happy Sharing! -2nd SEASON-",
    description: "イルミネーションスターズ ルームシェアアンソロジー",
  },
  twitter: {
    card: "summary",
    images: [{
      url: "https://expo-prototype.vercel.app/ogp.webp",
    }],
    title: "Twinkle Happy Sharing! -2nd SEASON-",
    description: "イルミネーションスターズ ルームシェアアンソロジー",
  },
  icons:
    "https://cdn.jsdelivr.net/gh/twitter/twemoji@v14.0.2/assets/72x72/1f31f.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rounded.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
