import "@repo/ui/globals.css";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Bobby Christopher | Senior Software Engineer",
  icons: {
    icon: "/icon.ico", // /public path
    apple: "/justHacker.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="size-full">
      <Head>
        <link rel="icon" href="." />
      </Head>

      <body className="bg-paper p-4 md:p-10">{children}</body>
    </html>
  );
}
