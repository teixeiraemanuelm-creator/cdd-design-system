import type { Metadata } from "next";
import "../tokens/globals.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "CDD Design System v1.0",
  description: "Sistema de design corporativo da CDD Tech Solutions. Tokens, componentes e documentação para todos os produtos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
