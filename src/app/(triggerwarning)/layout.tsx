import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".././(triggerwarning)/triggerwarning.css";
import localFont from'next/font/local'

const foundersGrotesk = localFont({
  src: [
    {
      path: './../fonts/foundersGrotesk/FoundersGrotesk-Light.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: './../fonts/foundersGrotesk/FoundersGrotesk-Regular.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: './../fonts/foundersGrotesk/FoundersGrotesk-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: './../fonts/foundersGrotesk/FoundersGrotesk-Bold.woff',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-foundersGrotesk'
})

const testFounders = localFont({
  src: [
    {
      path: './../fonts/testFoundersGrotesk/test-founders-grotesk-mono-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './../fonts/testFoundersGrotesk/test-founders-grotesk-mono-medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './../fonts/testFoundersGrotesk/test-founders-grotesk-mono-semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './../fonts/testFoundersGrotesk/test-founders-grotesk-mono-bold.woff2',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-testFoundersGrotesk'
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${foundersGrotesk.variable} ${testFounders.variable} text-black`}>{children}</body>
    </html>
  );
}
