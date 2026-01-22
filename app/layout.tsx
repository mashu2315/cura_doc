import "./globals.css";

export const metadata = {
  title: "CuraDoc - Healthcare Management Platform",
  description: "Professional healthcare management system for doctors and patients",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
