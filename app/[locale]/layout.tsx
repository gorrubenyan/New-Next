// layout.tsx
import '../globals.css';
import { ThemeProvider } from '@/Providers/ThemeContext';
import Header from '@/components/Header';
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <Header />
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
