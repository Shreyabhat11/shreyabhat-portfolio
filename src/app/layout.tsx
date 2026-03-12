import React from "react";
import "@/styles/tailwind.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "Shreya Portfolio",
  description: "AI + Full Stack Projects Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen w-full overflow-x-hidden bg-white">
        {children}
      </body>
    </html>
  );
}

