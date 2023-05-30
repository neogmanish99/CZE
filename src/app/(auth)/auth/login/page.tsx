"use client";
import LargeHeading from "@/app/components/ui/LargeHeading";
import Paragraph from "@/app/components/Paragraph";
import { FC, useRef } from "react";

import type { Metadata } from "next";
import { Button } from "@/app/components/ui/Button";
import { signIn } from "next-auth/react";

export const metadata: Metadata = {
    title: "Similarity API | Documentation",
    description: "Free & open-source text similarity API",
};

const page: FC = () => {
    const userName = useRef("");
    const pass = useRef("");

    const onSubmit = async () => {
        const result = await signIn("credentials", {
            email: userName.current,
            password: pass.current,
            redirect: true,
            callbackUrl: "/",
        });
    };
    return (
        <div className="container max-w-7xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-6">
                <LargeHeading>Login Page</LargeHeading>

                <input
                    type="email"
                    onChange={(e) => (userName.current = e.target.value)}
                />

                <input
                    type={"text"}
                    onChange={(e) => (pass.current = e.target.value)}
                />

                <Button onClick={onSubmit}>Login</Button>
            </div>
        </div>
    );
};

export default page;
