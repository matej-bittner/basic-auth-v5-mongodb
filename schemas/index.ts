import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Heslo je příliž krátké" }),
  name: z.string().min(1, { message: "Jméno Musí být vyplněné" }),
  surname: z.string().min(1, { message: "Příjmení musí být vyplněné" }),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const ResetSchema = z.object({
  email: z.string().email(),
});
