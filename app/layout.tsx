import type { Metadata } from "next";

// scss
import '../scss/styles.scss';

export const metadata: Metadata = {
  title: "zzlabs.net - Next.js Template Project",
  description: "zzlabs.net - Next.js Template Project",
  robots: {
    index: false, // set noindex
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body><main>{children}</main></body>
    </html>
  );
}
