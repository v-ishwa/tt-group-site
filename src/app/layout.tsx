import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TT Group - Promises Kept",
  description:
    "The TT Group of companies is a leading conglomerate with interests in international air cargo management, trucking, hotels & hospitality, insurance broking, visa and consular services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      style={{ fontFamily: "NT Somic" }}
      className={`${instrumentSans.variable} antialiased`}
      lang="en"
    >
      <body className="overflow-x-clip">
        {/* <PageLoader /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
