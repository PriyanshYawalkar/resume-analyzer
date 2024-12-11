"use client"

import { useState } from "react";
import axios from "axios";

interface AnalysisResult {
  score: number;
  suggestions: string[];
  mistakes: string[];
}

const UploadResume: React.FC = () => {
  const [jobDescription, setJobDescription] = useState<string>("");
  const [resume, setResume] = useState<File | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!resume || !jobDescription) {
      alert("Please provide both resume and job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("jobDescription", jobDescription);

    const response = await axios.post("/api/analyze", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setResult(response.data.analysis);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Resume Analyzer</h1>
      <textarea
        placeholder="Enter job description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <input type="file" onChange={handleFileUpload} className="mb-4" />
      <button
        onClick={handleAnalyze}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Analyze
      </button>
      {result && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-lg font-bold">Analysis Result:</h2>
          <p>Score: {result.score}/10</p>
          <h3 className="font-bold">Suggestions:</h3>
          <ul>
            {result.suggestions.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <h3 className="font-bold">Mistakes:</h3>
          <ul>
            {result.mistakes.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadResume;
