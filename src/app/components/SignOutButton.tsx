"use client";

import { FC, useState } from "react";
import { Button } from "./ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "./ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signOut = async () => {
        setIsLoading(true);

        try {
            await signOut();
        } catch (error) {
            toast({
                title: "Error signing in",
                message: "Please try again later",
                type: "error",
            });
        }
    };

    return (
        <Button onClick={signOut} isLoading={isLoading}>
            Sign Out
        </Button>
    );
};

export default SignOutButton;
