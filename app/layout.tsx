import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Fernando Hiroshi Takeda — Avaliação Técnica",
    template: "%s | Fernando Hiroshi Takeda — Avaliação Técnica",
  },
  metadataBase: new URL("http://localhost:3000"),
  description:
    "Minhas respostas para o teste técnico (Avaliação Técnica — Teste Lógica de Programação).",
  applicationName: "Avaliação Técnica",
  authors: [{ name: "Fernando Hiroshi Takeda" }],
  creator: "Fernando Hiroshi Takeda",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Fernando Hiroshi Takeda — Avaliação Técnica",
    description:
      "Minhas respostas para o teste técnico (Avaliação Técnica — Teste Lógica de Programação).",
    url: "/",
    siteName: "Avaliação Técnica",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Hiroshi Takeda — Avaliação Técnica",
    description:
      "Minhas respostas para o teste técnico (Avaliação Técnica — Teste Lógica de Programação).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
