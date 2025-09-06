import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Jersey_10 } from "next/font/google";

const jersey10 = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey-10",
});

export const metadata = {
  title: "bimql",
  description: "Next.js + Tailwind + shadcn/ui + React Bits",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jersey10.variable} bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Main page content */}
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
