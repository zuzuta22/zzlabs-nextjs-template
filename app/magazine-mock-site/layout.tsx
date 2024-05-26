import type { Metadata } from "next";

import HeaderWithHamburger from "@/_src/components/layouts/Headers/HeaderWithHamburger/HeaderWithHamburger";
import '../../_src/scss/styles.scss';
import { LogoContext } from "./_configs/contexts/commonContexts";
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: "zzlabs.net - Magazine Mock Site - Next.js Template Project",
  description: "zzlabs.net - Magazine Mock Site - - Next.js Template Project",
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
    <>
      <HeaderWithHamburger
        logo={LogoContext}
        />
      <main className={styles['l-main']}>
        {children}
      </main>
    </>
  );
}
