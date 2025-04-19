import ScrollToTop from "./components/ScrollToTop";
import "./globals.css";
import { LanguageProvider } from "@/app/contexts/LanguageContext";

export const metadata = {
  title: "Portfolio",
  description: "Mon site personnel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
