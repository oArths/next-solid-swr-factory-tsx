"use client";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { ThemeContextProvider } from "@/theme/useThema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeContextProvider >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
