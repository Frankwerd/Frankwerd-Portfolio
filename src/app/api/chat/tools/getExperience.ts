import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    'This tool shows my work history as a timeline. Use it when the user asks about my experience, work history, past jobs, career path, or where I have worked.',
  parameters: z.object({}),
  execute: async () => {
    return "Here's my work history above, most recent first. Want me to go deeper on any of these roles?";
  },
});
