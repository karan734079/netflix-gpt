import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

export const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export default genAI;
