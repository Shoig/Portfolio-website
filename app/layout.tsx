import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css"; /* Our CsS module */
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toricelli | Portfolio",
  description: "Backend Developer transitioning to Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* Navigation Bar */}
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            Toricelli.
          </Link>
          
          <div className={styles.navLinks}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/projects" className={styles.link}>Projects</Link>
          </div>
        </nav>

        {/* Page render */}
        {children}
        
      </body>
    </html>
  );
}