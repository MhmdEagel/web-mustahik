import type {NextAuthConfig} from "next-auth"
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { loginSchema } from "./schemas/login";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        // access credentials normally
        const validatedFields = loginSchema.parse(credentials);
        if (!validatedFields) return null;
      
        const { email, password } = credentials;
        const user = await getUserByEmail(email as string);
        if (!user || !user.password) return null;

        const isPasswordMatch = await bcrypt.compare(
          password as string,
          user.password,
        );
        if (!isPasswordMatch) return null;
        return {
          id: user.id,
          email: user.email,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
