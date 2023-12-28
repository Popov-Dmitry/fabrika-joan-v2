import { IBM_Plex_Mono, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/elements/header/Header";
import Footer from "@/components/elements/footer/Footer";
import { joinClassNames } from "@/utils/join-class-names";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans"
});
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono"
});

export const metadata = {
  title: "Fabrika | Ask Joan about your competitors",
  description: "The AI-Powered Assistant for Smart Insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={joinClassNames(inter.variable, ibmPlexSans.variable, ibmPlexMono.variable)}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
