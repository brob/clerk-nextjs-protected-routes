import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Nav from "@/components/Nav";
import { AppSidebar } from "@/components/app-sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<ClerkProvider>
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <header className="flex justify-between items-center p-4 gap-5 h-16">
        <h1 className="text-2xl font-bold">Protected courses</h1>
        <SignedOut>
          <div className="flex gap-5">
          <SignInButton />
          <SignUpButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <div className="container mx-auto p-4">
      <div className="flex">
        <aside>
          <AppSidebar />
        </aside>
        <main className="p-4 flex-1">
      {children}
      
        </main>
      </div>
    </div>
    </body>
  </html>
</ClerkProvider>)
}
