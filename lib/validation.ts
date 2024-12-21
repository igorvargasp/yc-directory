import z from "zod";
export const formSchema = z.object({
  title: z.string().min(3).max(100).trim(),
  description: z.string().min(3).max(500).trim(),
  category: z.string().min(3).max(20).trim(),
  // link: z
  //   .string()
  //   .url()
  //   .refine(async (url) => {
  //     try {
  //       const res = await fetch(url, { method: "HEAD" });
  //       const contentType = res.headers.get("content-type");
  //       return contentType?.startsWith("image/");
  //     } catch {
  //       return false;
  //     }
  //   }),
    pitch: z.string().min(3).trim(),
});