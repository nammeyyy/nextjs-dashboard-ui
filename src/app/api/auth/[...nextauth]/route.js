import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/user";
import bcrypt from 'bcryptjs'
import { connectMongoDB } from "../../../../../lib/mongodb";

const authOptions = {
    providers: [
        CredentialsProvider({
          name: 'credentials',
          credentials: {},
          async authorize(credentials, req) {
            try {
              const { email, password } = credentials;

              if (!email || !password) {
                throw new Error("Missing email or password");
              }

                await connectMongoDB();
                const user = await User.findOne({ email });

                if (!user) {
                    return null;
                }

                const passwordMatch = await bcrypt.compare(password, user.password);

                if (!passwordMatch) {
                    return null;
                }

                return user;

            } catch(error) {
              console.error("Authorization error:", error);
              // throw new Error("Authentication failed");
            }
            
          }
        })
      ],
      session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60 // 30 days
      },
      secret: process.env.NEXTAUTH_SECRET,
      pages: {
        signIn: "/login"
      },
      callbacks: {
        async jwt({ token, user, session }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    role: user.role

                }
            }

            return token;
        },
        async session({ session, user, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    role: token.role
                }
            }
        }
      }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };