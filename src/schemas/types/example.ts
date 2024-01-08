import { z } from "zod";
export const exampleSchema = z.object({
    title: z.string()
});
export type Example = z.infer<typeof exampleSchema>;