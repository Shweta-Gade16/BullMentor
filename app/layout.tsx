import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={''}
      >
        {children}
      </body>
    </html>
  );
}
