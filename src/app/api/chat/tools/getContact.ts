import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'Shows my contact card (email, LinkedIn, GitHub and other socials). Use this tool whenever the user asks how to contact, reach, email, message or connect with me.',
  parameters: z.object({}),
  execute: async () => {
    return "Here is my contact informations above, Feel free to contact me I will be happy to answer you 😉";
  },
});
