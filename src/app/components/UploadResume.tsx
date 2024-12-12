"use client";

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
  const [loading, setLoading] = useState<boolean>(false);

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

    try {
      setLoading(true);
      const response = await axios.post("/api/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data.analysis);
    } catch (error) {
      console.error("Error analyzing resume:", error);
      alert("An error occurred while analyzing the resume.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 justify-center text-center">
          Resume Analyzer
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Upload your resume and provide a job description to get an analysis of your suitability.
        </p>
        <textarea
          placeholder="Enter job description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="w-full border rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Upload Resume</label>
          <input
            type="file"
            onChange={handleFileUpload}
            className="block w-full text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className={`w-full py-2 px-4 rounded text-white font-semibold transition duration-200 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
        {result && (
          <div className="mt-6 p-6 border-t">
            <h2 className="text-xl font-bold text-gray-800">Analysis Result</h2>
            <p className="text-gray-700 mt-2">
              <span className="font-medium">Score:</span> {result.score}/10
            </p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Suggestions:</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {result.suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">Mistakes:</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {result.mistakes.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
