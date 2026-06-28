import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className="min-h-full flex flex-col bg-black text-white overflow-x-hidden">
        <ModalProvider>
          {children}
          {/* Single global enquiry modal — rendered once for the entire app */}
          <EnquiryModal />
        </ModalProvider>
      </body>
    </html>
  );
}
