import { tool } from 'ai';
import { z } from 'zod';

export const getJobOpportunity = tool({
  description:
    "Gives a summary of what kind of job I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my job search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Availability**: Immediately available for a full-time position.
- 🌍 **Location**: Open to opportunities, particularly interested in innovative tech hubs. (User can specify further if needed based on resume/brief)
- 🧑‍💻 **Focus**: AI development, full-stack web applications, SaaS, agentic workflows, product development, project management.
- 🛠️ **Stack/Skills**: Python, React/Next.js, JavaScript/TypeScript, LLMs (Gemini, Groq), Google Apps Script, SQL, System Design, Agile Methodologies. (Tailor further based on resume)
- ✅ **What I bring**: Proven experience in designing and deploying end-to-end serverless AI solutions, reducing manual effort significantly. Strong background in project management, securing grant funding, data analysis, and translating complex data into strategic insights. Ambitious, a fast learner, and a "full-spectrum problem solver" ready for big challenges.
- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges!

📬 **Contact me** via:
- Email: libutti123@gmail.com
- LinkedIn: https://linkedin.com/in/francis-libutti-398981156

Let's build cool shit together ✌️
    `;
  },
});