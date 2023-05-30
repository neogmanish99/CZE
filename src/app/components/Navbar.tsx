// "use client";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import { getCurrentUser } from "@/lib/session";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navbar = async () => {
    // const session = await getServerSession();
    // const { data: session } = useSession();
    const user = await getCurrentUser();
    return (
        <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex item-center justify-between">
            <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
                <Link href="/" className={buttonVariants({ variant: "link" })}>
                    Text Similarity 1.0
                </Link>

                <div className="md:hidden">
                    <ThemeToggle />
                </div>

                <div className="hidden md:flex gap-4">
                    <ThemeToggle />
                    <Link
                        href="/documentation"
                        className={cn(buttonVariants({ variant: "ghost" }), "")}
                    >
                        Documentation
                    </Link>

                    {user ? (
                        <>
                            <Link
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                                href="/dashboard"
                            >
                                Dashboard
                            </Link>
                            <Link
                                className={buttonVariants({
                                    variant: "ghost",
                                })}
                                href="/dashboard"
                            >
                                {user?.name}
                            </Link>

                            <SignOutButton />
                        </>
                    ) : (
                        <Link href="/auth/login">
                            <SignInButton />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
