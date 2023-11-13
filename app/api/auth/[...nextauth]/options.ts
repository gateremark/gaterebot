import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
            httpOptions: { timeout: 10000 },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            httpOptions: { timeout: 10000 },
        }),

        // CredentialsProvider({
        //     // The name to display on the sign in form (e.g. "Sign in with...")
        //     name: "Credentials",
        //     // `credentials` is used to generate a form on the sign in page.
        //     // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        //     // e.g. domain, username, password, 2FA token, etc.
        //     // You can pass any HTML attribute to the <input> tag through the object.
        //     credentials: {
        //         username: {
        //             label: "Username",
        //             type: "text",
        //             placeholder: "A cool username...",
        //         },
        //         password: {
        //             label: "Password",
        //             type: "password",
        //             placeholder: "Your Password",
        //         },
        //     },
        //     async authorize(credentials, req) {
        //         // Add logic here to look up the user from the credentials supplied
        //         const user = {
        //             id: "1",
        //             name: "Mark Gatere",
        //             email: "mark5gatere@gmail.com",
        //         };

        //         if (user) {
        //             // Any object returned will be saved in `user` property of the JWT
        //             return user;
        //         } else {
        //             // If you return null then an error will be displayed advising the user to check their details.
        //             return null;

        //             // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        //         }
        //     },
        // }),
    ],
    pages: {
        signIn: "/signin",
    },
    callbacks: {
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
    },
};
