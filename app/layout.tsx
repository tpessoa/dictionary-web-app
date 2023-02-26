import "./globals.css";
import { ThemeProvider } from "@wits/next-themes";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="dark:bg-neutral-900" style={{ minHeight: "100dvh" }}>
          <div className="mx-2 sm:mx-6 md:mx-12 py-6 dark:bg-neutral-900 ">
            <ThemeProvider attribute="class">
              <Header />
              <div className="mt-8">{children}</div>
            </ThemeProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
