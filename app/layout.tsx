// This file is kept for compatibility but the actual layout is in app/[locale]/layout.tsx
// The middleware redirects all requests to the locale-prefixed routes

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
