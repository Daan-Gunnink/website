import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
  })
});

export const collections = { projects };