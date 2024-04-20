import type { Metadata } from "next";

// scss
import Footer from "@/_src/components/layouts/Footer/Footer";
import Header from "@/_src/components/layouts/Header/Header";
import '../_src/scss/styles.scss';

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
      <body>
        <Header />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
