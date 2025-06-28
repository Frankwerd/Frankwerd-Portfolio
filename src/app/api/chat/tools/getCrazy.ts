
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will the craziest thing I've ever done. use it when the user ask someting like : 'What the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "Above is a photo of me during my research expedition in the incredible Galápagos Islands. It was an unparalleled experience, merging scientific inquiry with one of the most unique ecosystems on Earth. I had the privilege to contribute to vital ecological data collection, diving deep into biodiversity in this iconic natural laboratory. It was an immersive and truly transformative journey. What kind of complex environments do you find most interesting to explore?";
  },
});