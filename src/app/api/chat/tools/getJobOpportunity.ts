import { tool } from 'ai';
import { z } from 'zod';

export const getJobOpportunity = tool({
  description:
    "Gives a summary of what I'm doing now, the kind of work and collaborations I'm open to, plus how to reach me. Use this tool when the user asks about my job search, availability, hiring me, or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here's where I'm at 👇

- 💼 **Now**: Growth Engineer at GatherUp (full-time, remote), and I run Bay1 Consulting Group on the side.
- 🤝 **Open to**: conversations about AI systems, growth engineering and automation work, plus Bay1 Consulting Group projects (websites, AI builds, CRM and workflow automation).
- 🧑‍💻 **Focus**: LLM-powered tools and agents, growth and marketing systems, full-stack web apps, SEO/GEO/AEO, and CRM/ERP automation.
- 🛠️ **Stack**: TypeScript/JavaScript, Python, React/Next.js, Google Apps Script, Gemini, Claude + MCP, HubSpot, Shopify, AWS Lambda.
- ✅ **What I bring**: production AI systems shipped from scratch, a founder's ownership of the whole lifecycle from discovery to launch, and the business side to match (GTM strategy, project management, $2M+ in grant portfolios).

📬 **Contact me** via:
- Email: libutti123@gmail.com
- LinkedIn: https://www.linkedin.com/in/francis-libutti

Let's build something great together ✌️
    `;
  },
});
