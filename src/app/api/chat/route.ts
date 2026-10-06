import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getBlog } from './tools/getBlog';
import { getContact } from './tools/getContact';
import { getExperience } from './tools/getExperience';
import { getCrazy } from './tools/getCrazy';
import { getJobOpportunity } from './tools/getJobOpportunity';
import { getPresentation } from './tools/getPresentation';
import { getProjectsOverview } from './tools/getProjectsOverview';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
// getWeather was in original, can be added back if a weather API key is provided by user
// import { getWeather } from './tools/getWeather'; 

export const maxDuration = 30;

// Set GEMINI_API_KEY (or GOOGLE_GENERATIVE_AI_API_KEY) in .env.local / Vercel env vars
const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY ?? process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});
const MODEL = process.env.GEMINI_MODEL ?? 'gemini-3.8-flash';

function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    // console.log('[CHAT-API] Incoming messages:', messages); // Optional: for debugging

    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getProjectsOverview,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getExperience,
      getBlog,
      getCrazy,
      getJobOpportunity,
      // getWeather, // Add back if implemented and API key is available
    };

    const result = streamText({
      model: google(MODEL),
      messages,
      toolCallStreaming: true, // Kept from original
      tools,
      maxSteps: 5, // Increased slightly from 2, as some project queries might need more steps if logic was complex
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}