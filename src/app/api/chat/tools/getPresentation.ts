import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Francis LiButti. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Francis J. LiButti, a Strategic Project Manager and Data Analyst at the forefront of AI innovation. I build scalable, data-driven solutions and drive impact across tech and venture sectors. My passion centers on AI strategy and full-spectrum problem-solving.",
    };
  },
});
