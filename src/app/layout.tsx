import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {resolveHref} from "next/dist/client/resolve-href";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Ihssane Botazit Portfolio",
    description: "A showcase of projects and works by Ihssane Botazit",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="shortcut icon" href="/images/favicon.jpg"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.jpg"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.jpg"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.jpg"/>
        </head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}
