"use server";

import { z } from "zod";
import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/helpers/user";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Špatně vyplněná pole!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Zkontolujte vyplněná data a zkuste to znovu" };
  }

  const comparePassword = await bcrypt.compare(password, existingUser.password);

  if (!comparePassword) {
    return { error: "Zkontolujte vyplněná data a zkuste to znovu" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Zkontrolujte zda jsou všechna pole vyplněna správně." };
    }

    throw error;
  }
};
