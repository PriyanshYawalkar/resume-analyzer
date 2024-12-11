import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";
import fs from "fs/promises";

const analyzeResume = async (resumeText: string, jobDescription: string) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY!,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = `
Analyze the following resume against the provided job description:
Resume:
${resumeText}

Job Description:
${jobDescription}

Provide:
1. A relevance score out of 10.
2. Key mistakes in the resume (grammar, structure, missing keywords, etc.).
3. Suggestions to improve the resume for this job description.
`;

  const response = await openai.createCompletion({
    model: "gpt-4",
    prompt,
    max_tokens: 500,
  });

  return response.data.choices[0].text;
};

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const jobDescription = formData.get("jobDescription") as string;
  const file = formData.get("resume") as Blob;

  if (!jobDescription || !file) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const fileBuffer = Buffer.from(await file.arrayBuffer());
    const resumeText = fileBuffer.toString("utf-8");

    const analysis = await analyzeResume(resumeText, jobDescription);
    return NextResponse.json({ analysis });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error analyzing resume" }, { status: 500 });
  }
}
