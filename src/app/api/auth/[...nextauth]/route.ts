import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        // ...add more providers here
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "jsmith",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as any;
                const res = await fetch("http://localhost:8080/api/v1/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });

                const user = await res.json();

                if (res.ok && user) {
                    return user;
                } else return null;
            },
        }),
    ],

    session: {
        strategy: "jwt",
    },
};

export default authOptions;
