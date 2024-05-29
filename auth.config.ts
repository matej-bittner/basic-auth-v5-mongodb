import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "@/helpers/user";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        /* potřebuji znova oběřit, zda jsou data ok, kdyby někdo zkusil poslat data rovnou do tohoto souboru*/
        const validateFields = LoginSchema.safeParse(credentials);

        if (validateFields.success) {
          const { email, password } = validateFields.data;

          const user = await getUserByEmail(email);
          if (!user) return null;

          const comparePassword = await bcrypt.compare(password, user.password);

          if (comparePassword) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
