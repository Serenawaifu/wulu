export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta property="og:title" content="Your Project" />
        <meta property="og:image" content="/images/og-image.jpg" />
      </head>
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
