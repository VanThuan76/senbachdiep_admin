import { NextApiRequest, NextApiResponse } from 'next';
import { AuthOptions } from 'next-auth/core/types';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
type NextAuthOptionsCallback = (req: NextApiRequest, res: NextApiResponse) => AuthOptions;
const nextAuthOptions: NextAuthOptionsCallback = (req, res) => {
    return {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            }),
            FacebookProvider({
                clientId: process.env.FACEBOOK_CLIENT_ID as string,
                clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
            }),
        ],
        callbacks: {
            async signIn({ }) {
                return true;
            },
            async jwt({ token }) {
                return token;
            },
            async session({ session, token }) {
                const user = token;
                session.user = user;
                return session;
            },
        },
        secret: process.env.NEXTAUTH_SECRET,
        debug: true, // For development
    };
};
export default nextAuthOptions;
