import type { Metadata } from "next";
import "./globals.css";
import IntroLoaderWrapper from "@/components/IntroLoader/IntroLoaderWrapper";
import WavyBgAnimatorWrapper from "@/components/WavyBgAnimator/WavyBgAnimatorWrapper";
import SplashCursor from "@/components/SplashCursor/SplashCursor";

export const metadata: Metadata = {
  title: "3.0 Labs | Engineering Intelligent Products",
  description: "Engineering Ideas Into Intelligent Products. We build AI-powered products, web apps, and custom solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <IntroLoaderWrapper />
        <SplashCursor />
        <div className="mesh-bg"></div>
        <div className="wavy-glow-left" id="wavy-left"></div>
        <div className="wavy-glow-right" id="wavy-right"></div>
        <WavyBgAnimatorWrapper />
        {children}
      </body>
    </html>
  );
}
