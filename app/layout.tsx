import type { Metadata } from "next";

// scss
import '../_src/scss/styles.scss';

export const metadata: Metadata = {
  title: "yumu31pj - Next.js Template Project",
  description: "yumu31pj - Next.js Template Project",
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
      <body>
        {children}
      </body>
    </html>
  );
}
