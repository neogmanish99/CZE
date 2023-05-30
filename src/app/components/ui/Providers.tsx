"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const Providers = ({
    children,
    session,
}: {
    children: ReactNode;
    session: any;
}) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SessionProvider session={session}>{children}</SessionProvider>
        </ThemeProvider>
    );
};

export default Providers;
