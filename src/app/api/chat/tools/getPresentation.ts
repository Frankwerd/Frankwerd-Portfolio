import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Francis LiButti. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Francis (Frankie) J. LiButti, a Growth Engineer at GatherUp and founder of Bay1 Consulting Group, based in Bayonne, NJ. I design and ship AI systems, automations and websites end to end, from LLM chatbots and Claude + MCP agent tooling to custom ERPs and CRM pipelines. My passion is full-spectrum problem-solving: learning fast, strategizing, and building.",
    };
  },
});
