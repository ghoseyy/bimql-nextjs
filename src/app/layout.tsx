import "./globals.css";
import { ThemeProvider } from "next-themes";
export const metadata = {
  title: "bimql",
  description: "Next.js + Tailwind + shadcn/ui + React Bits",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          {/* Main page content */}
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
