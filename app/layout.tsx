import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const aileron = localFont({
  src: [
    {
      path: '../public/fonts/Aileron-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aileron-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aileron-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aileron-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "watshisname-stuutzer",
  description: "Check out my super dope website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aileron.className}`}>
        {children}
      </body>
    </html>
  );
}
