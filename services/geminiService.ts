import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
// In a real app, we would handle the missing key more gracefully. 
// For this demo, we assume the environment is set up correctly.

const ai = new GoogleGenAI({ apiKey });

const MEDICAL_SYSTEM_INSTRUCTION = `
You are an intelligent medical assistant for "MediConnect India". 
Your goal is to help users navigate the platform, find doctors, and provide general health information.

IMPORTANT RULES:
1. STRICTLY DISCLAIM: You are an AI, not a doctor. Always advise users to consult a verified professional for medical advice.
2. CONTEXT: You know about Indian medical context (MBBS, MD degrees, common Indian medicines).
3. TONE: Professional, empathetic, and concise.
4. If asked about a specific condition, provide general educational info but end with "Please book an appointment with a specialist on our platform."
`;

export const generateMedicalResponse = async (userPrompt: string): Promise<string> => {
  if (!apiKey) return "API Key is missing. Please configure process.env.API_KEY.";

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: MEDICAL_SYSTEM_INSTRUCTION,
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};
