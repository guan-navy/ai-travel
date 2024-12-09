import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
export const metadata: Metadata = {
  title: "旅行家",
  description: "规划一次合理的旅行",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AntdRegistry>{children}</AntdRegistry>
       
      </body>
    </html>
  );
}
