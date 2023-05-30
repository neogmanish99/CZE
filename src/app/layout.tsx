import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Providers from "./components/ui/Providers";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/Toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
    session,
}: {
    children: React.ReactNode;
    session: any;
}) {
    return (
        <html
            lang="en"
            className={cn(
                "bg-white text-slate-900 antialiased",
                inter.className
            )}
        >
            <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
                <Providers session={session}>
                    <Toaster position="bottom-right" />
                    {/* @ts-expect-error Server Component */}
                    <Navbar />
                    {children}
                </Providers>
                {/*Allow more height on mobile devices*/}
                <div className="h-40 md:hidden" />
            </body>
        </html>
    );
}
