import { z } from "zod";

export const signInput = z.object({
  username: z.string().min(1).max(20).email("This is not a valid email."),
  password: z.string().min(8).max(15),
});

export const itemInputProps = z.object({
  product: z.string().min(1).max(20),
  description: z.string().min(1).max(50),
  price: z.string().min(1).max(4),
  imageLink: z.string().url(),
});

export type SignupParams = z.infer<typeof signInput>;
export type ProductParams = z.infer<typeof itemInputProps>;
