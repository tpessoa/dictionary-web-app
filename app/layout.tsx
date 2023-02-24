import "./globals.css";
import { BiBook } from "react-icons/bi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="mx-12 my-6 h-screen">
          <div className="flex justify-between">
            <div className="w-12 h-12">
              <BiBook className="w-full h-full text-gray-300" />
            </div>
            <div className="flex gap-2 items-center">
              <div>Senrif</div>
              <div>night mode</div>
            </div>
          </div>
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
