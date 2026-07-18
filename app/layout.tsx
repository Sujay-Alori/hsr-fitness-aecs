import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import EnquiryModal from "@/components/modals/EnquiryModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HSR Fitness World | Premium Gym in HSR Layout, Bangalore",
  description:
    "HSR Fitness World — Bangalore's most premium gym. State-of-the-art equipment, expert trainers, flexible memberships. Transform your body, elevate your life.",
  keywords:
    "HSR Fitness World, gym HSR Layout, Bangalore gym, premium fitness, personal training, membership",
  openGraph: {
    title: "HSR Fitness World | Premium Gym",
    description: "Transform your body at Bangalore's most premium gym.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PDWBXGXJ');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DCQ9HPXHTD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DCQ9HPXHTD');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PDWBXGXJ"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        <ModalProvider>
          {children}
          {/* Single global enquiry modal — rendered once for the entire app */}
          <EnquiryModal />
        </ModalProvider>
      </body>
    </html>
  );
}