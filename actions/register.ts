"use server";
import bcrypt from "bcryptjs";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/helpers/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Špatně vyplněná pole!" };
  }

  const { email, surname, password, name } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Tento email už někdo používá" };
  }

  const hashPw = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      name,
      surname,
      password: hashPw,
    },
  });

  return { success: "Vytvoření proběhlo v pořádku" };
};
