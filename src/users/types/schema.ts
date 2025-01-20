import { z } from 'zod';
import { patterns } from '../../constants';

export const schema = z.object({
  name: z.string().min(3, { message: "Name is too short" }),
  email: z.string().min(1, { message: "Email is too short" }).refine((text) => patterns.email.test(text), {
    message: "Invalid email",
  }),
});

export default schema;
