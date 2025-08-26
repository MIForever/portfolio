import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import FloatingNav from "@/components/FloatingNav";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inoyatullo Musayev - Backend Developer & AI Engineer",
  description: "Backend Developer specializing in AI, Machine Learning, and scalable web applications. Expert in React, Node.js, Python, and modern cloud technologies.",
  keywords: ["Backend Developer", "AI Engineer", "Machine Learning", "React", "Node.js", "Python", "Web Development"],
  authors: [{ name: "Inoyatullo Musayev" }],

  robots: "index, follow",
  openGraph: {
    title: "Inoyatullo Musayev - Backend Developer & AI Engineer",
    description: "Backend Developer specializing in AI, Machine Learning, and scalable web applications.",
    type: "website",
    locale: "en_US",
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Performance monitoring */}
        
        {/* Performance monitoring */}
        
        {/* Resource hints for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" as="style" />
        
        {/* Advanced resource hints */}
        <link rel="preload" href="/cursor.png" as="image" type="image/png" />
        <link rel="modulepreload" href="/_next/static/chunks/framer-motion.js" />
        <link rel="modulepreload" href="/_next/static/chunks/lucide-react.js" />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body { margin: 0; font-family: Inter, sans-serif; }
            .hero-section { min-height: 100vh; }
            .loading { opacity: 0; transition: opacity 0.3s; }
            .loaded { opacity: 1; }
          `
        }} />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
                  }
                });
              }
              
              // Intersection Observer polyfill for older browsers
              if (!('IntersectionObserver' in window)) {
                import('intersection-observer').then(() => {
                  console.log('IntersectionObserver polyfill loaded');
                });
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <FloatingNav />
        {children}
      </body>
    </html>
  )
}
